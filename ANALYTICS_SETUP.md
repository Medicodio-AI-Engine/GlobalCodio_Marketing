# Analytics, Cookie Consent & Lead Tracking - Setup & Status

_Privacy-compliant analytics + lead-attribution framework added to the marketing site._
_Scope: **Google Analytics 4 only** - no advertising, no remarketing, no "sale/sharing" of personal information._

---

## Current state (at a glance)

| Thing | Status |
|-------|--------|
| GA4 Measurement ID | **`G-7KBLTE76XH`** - already set in local `.env` |
| Consent framework (banner, gating, preferences) | ✅ Built |
| GA4 loaded behind Consent Mode v2 (default denied) | ✅ Built |
| Per-lead location + source capture | ✅ Built |
| Sanity Studio (Lead Context fields) | ✅ **Deployed** → https://globalcodio-ai.sanity.studio/ |
| GA4 admin privacy settings (DPA, Signals off, retention) | ✅ Done |
| GA ID on **Vercel** + production deploy | ☐ To do |
| Legal sign-off | ☐ To do |

> The site stays 100% tracker-free until `NEXT_PUBLIC_GA_ID` is present in the
> deployed environment. It's set locally; it still needs to be added to Vercel.

---

## Part 1 - What was built this session

### A. Cookie consent framework (analytics-only, opt-in)
- `lib/consent.js` - consent state (first-party `gc_consent` cookie + localStorage), opt-in defaults (analytics denied until chosen), Google Consent Mode v2 helpers, `TRACKING_ENABLED` flag.
- `components/consent/ConsentManager.jsx` - the banner + the reopenable preferences modal.
- `components/consent/ConsentScripts.jsx` - loads GA4 via Consent Mode v2 (default **denied**); renders nothing unless a GA ID is configured.
- `components/layout/Footer.jsx` - **"Cookie Preferences"** control (reopens the modal any time).
- `components/layout/SiteShell.jsx` - mounts the consent components site-wide.

**Banner UX (final):**
- A **card in the bottom-left**, clear of the bottom-center event-reminder pill.
- Three buttons on one line (web): **Learn more** · **Accept Necessary Only** · **Accept All**.
- An **× in the top-right** that closes the card and accepts **necessary cookies only** (never grants analytics - closing ≠ consent).
- On phones the card goes edge-to-edge and the buttons stack full-width.

### B. Google Analytics 4 - consent-gated
- Fires **only after** the visitor clicks "Accept All" (or enables Analytics in preferences).
- `anonymize_ip` enabled; `wait_for_update` set so no hit leaks before the consent decision.
- Entirely **dormant** when no GA ID is set.

### C. Per-lead location & source capture (independent of GA)
- `lib/attribution.js` - captures **first-touch** UTM params, external referrer, and landing page into `sessionStorage` (no cookie, no consent needed - it's transient and only sent on submit).
- `components/layout/SiteShell.jsx` - seeds that capture once per session.
- `src/views/Contact.jsx` - sends the attribution + submit page with the form.
- `app/api/contact/route.js` - reads **Vercel edge geo headers** (`x-vercel-ip-city/region/country/timezone`), merges with the attribution, and threads it into both the notification email ("Lead context" block) and the Sanity record.
- `lib/sanity.js` + `sanity/schemas/formSubmission.js` - persist 12 context fields in a collapsed, read-only **"Lead Context"** fieldset.

### D. Privacy Policy alignment (`src/views/PrivacyPolicy.jsx`)
- §10 rewritten to "Google Analytics" only - explicitly states **no** Google advertising products, remarketing, audience building, or sale/sharing; notes analytics loads only after consent.
- §2 now discloses **approximate (IP-based) location** and **referral/campaign (UTM) data**.

### E. Mobile / layout fixes
- Fixed the Privacy Policy & Terms pages rendering text in a squeezed half-width column on mobile (the grid now collapses to a single column correctly; affected both pages).

---

## Part 2 - Remaining setup & deployment steps

### Step 1 - GA4 property ✅ (done - ID exists)
Property + web data stream created; Measurement ID `G-7KBLTE76XH` in hand.

### Step 2 - Configure GA4 admin for privacy alignment ✅ (done)
Completed in GA4 **Admin** so the tool matches the Privacy Policy:
- ✅ **Data Processing Terms accepted** - Admin → *Account details* (required for GDPR/EEA).
- ✅ **Google Signals OFF** - Admin → *Data collection and modification → Data collection* (advertising/cross-device feature kept off → analytics-only).
- ✅ **Event data retention = 14 months** - Admin → *Data collection and modification → Data retention*.

### Step 3 - Environment variable
- **Local** ✅ - `NEXT_PUBLIC_GA_ID=G-7KBLTE76XH` is in `.env` (gitignored). Restart `npm run dev` to pick it up.
- **Vercel** ☐ - Settings → Environment Variables → add `NEXT_PUBLIC_GA_ID=G-7KBLTE76XH`, scope **Production** (+ Preview if wanted) → save.
  ```bash
  vercel env add NEXT_PUBLIC_GA_ID production
  ```

### Step 4 - Deploy the website ☐
Push to your deploy branch / `vercel --prod`. This is what:
- activates the consent banner + GA gating (because the env var is now present), and
- starts writing the new lead-context fields on every submission.

### Step 5 - Sanity Studio ✅ (done)
`npx sanity deploy` was run → schema with "Lead Context" fields is live at
https://globalcodio-ai.sanity.studio/. No data was modified. No migration needed
(old submissions simply show those fields blank).

### Step 6 - Verify ☐
1. Open the deployed site in incognito → **cookie card appears** (bottom-left).
2. DevTools → **Network**, filter `collect`/`gtag`: nothing before consent; fires after **Accept All**.
3. DevTools → **Application → Cookies**: `gc_consent` records the choice; `_ga` appears only after consent.
4. GA4 → **Reports → Realtime**: your visit shows once accepted.
5. Submit a test contact form on the deployed site → confirm location + source appear in the email and on the Sanity submission. _(Location is blank on localhost - Vercel geo headers only exist in production.)_
6. Footer **"Cookie Preferences"** reopens the modal and lets you change the choice.

---

## Part 3 - How it works (reference)

### Consent gating
GA loads in Google **Consent Mode v2** with everything denied by default. The
visitor's choice (Accept All / Necessary Only / per-category in the modal) writes
the `gc_consent` cookie and pushes a consent *update* to Google. No analytics
storage is used until that update grants it.

### Lead attribution (two sources, stapled server-side)
| Fact | Source | When |
|------|--------|------|
| Approximate location (city/region/country/timezone) | Vercel edge headers (from IP; raw IP never stored) | At submit, server-side |
| Campaign / source (UTM, referrer, landing page) | Visitor's browser, captured first-touch into sessionStorage | Carried from first page → sent at submit |

The API route merges both into one record on the Sanity submission and the email.
Works for 100% of submitters regardless of the cookie choice (first-party,
necessary for handling the enquiry).

### Running a campaign
Tag your links with UTM parameters (use Google's Campaign URL Builder), e.g.
`...?utm_source=linkedin&utm_medium=paid&utm_campaign=q3-firms`. Any lead that
arrived via that link carries the campaign into its record - so you can see which
campaign produced named enquiries, not just clicks.

---

## Part 4 - Compliance notes

- **Reject is as easy as accept** - "Accept Necessary Only" sits next to "Accept All" with equal prominence (GDPR / CNIL requirement).
- **The × means refuse**, never consent - and it's a supplement to the explicit reject button, not the only way to refuse (avoids the CNIL "dark pattern" finding). If legal prefers maximum caution, the × can be removed; the labeled button still covers refusal.
- **Analytics-only posture** is reflected end-to-end: code, Privacy Policy §10, and the recommended GA4 admin settings (Google Signals off).

### Legal review (not engineering)
- [ ] Sign off on Privacy Policy §10 (narrowed to analytics-only) and §2 (approximate location + referral data now disclosed).
- [ ] Confirm GA4 settings (retention, Google Signals off, no sharing with other Google products) match the policy.
- [ ] Confirm the **"16 years"** children's-privacy threshold is intended (stricter than COPPA's 13; fine for B2B, but a deliberate call).
- [ ] Acknowledge that approximate location + referral data are stored on lead records (no banner needed; disclosed in policy).

---

## File manifest (changed/added this session)

**New:** `lib/consent.js`, `lib/attribution.js`,
`components/consent/ConsentManager.jsx`, `components/consent/ConsentScripts.jsx`,
`ANALYTICS_SETUP.md`

**Modified:** `components/layout/SiteShell.jsx`, `components/layout/Footer.jsx`,
`src/views/Contact.jsx`, `src/views/PrivacyPolicy.jsx`, `src/styles/global.css`,
`app/api/contact/route.js`, `lib/sanity.js`, `sanity/schemas/formSubmission.js`,
`.env.example`

---

## Gotchas

- **Don't run `npm run build` while `npm run dev` is running.** Both write to
  `.next/` and mix dev/prod chunks, causing `Cannot find module './###.js'`
  errors. Fix: stop dev, `rm -rf .next`, restart. (To test a prod build, stop the
  dev server first.)
- `NEXT_PUBLIC_*` vars are inlined at build time - changing one requires a dev
  server restart (local) or a redeploy (Vercel).
- Vercel geo headers (`x-vercel-ip-*`) only exist in production - location is
  blank on localhost.

---

_Last updated: 2026-06-29._
