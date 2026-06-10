import { Resend } from 'resend';
import { saveFormSubmission } from '../../../lib/sanity';

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Branded email template ────────────────────────────────────────────────────
function buildEmailHtml({ fullName, workEmail, orgName, website, howHeard, message }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const logoUrl = `${siteUrl}/logo.svg`;

  const field = (label, value, isLink = false) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #e8eefc;vertical-align:top;width:148px;
                 font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;
                 color:#5b616e;white-space:nowrap;">
        ${label}
      </td>
      <td style="padding:14px 0;border-bottom:1px solid #e8eefc;vertical-align:top;
                 font-size:15px;color:#0a0b0d;line-height:1.5;">
        ${isLink
          ? `<a href="${value}" style="color:#1950C6;text-decoration:none;font-weight:500;">${value}</a>`
          : value}
      </td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>New enquiry from ${fullName}</title>
</head>
<body style="margin:0;padding:0;background:#f3f6fe;font-family:'Inter',system-ui,-apple-system,sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
         style="background:#f3f6fe;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation"
               style="max-width:600px;width:100%;">

          <!-- Logo header -->
          <tr>
            <td align="center"
                style="background:linear-gradient(135deg,#1950C6 0%,#0e266c 100%);
                       border-radius:16px 16px 0 0;padding:32px 40px;">
              <a href="${siteUrl}" style="display:inline-block;text-decoration:none;">
                <img src="${logoUrl}" alt="GlobalCodio" width="160" height="auto"
                     style="display:block;height:auto;max-height:36px;width:auto;" />
              </a>
            </td>
          </tr>

          <!-- Blue accent bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#3f74e8 0%,#1950C6 50%,#0e266c 100%);"></td>
          </tr>

          <!-- Card body -->
          <tr>
            <td style="background:#ffffff;padding:40px 40px 32px;border-radius:0 0 16px 16px;
                       box-shadow:0 4px 24px rgba(25,80,198,.08);">

              <!-- Eyebrow -->
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:.1em;
                        text-transform:uppercase;color:#1950C6;">
                New Contact Form Submission
              </p>

              <!-- Heading -->
              <h1 style="margin:0 0 4px;font-size:26px;font-weight:700;
                         letter-spacing:-0.02em;line-height:1.15;color:#0a0b0d;">
                ${fullName}
              </h1>
              <p style="margin:0 0 32px;font-size:14px;color:#5b616e;">
                ${orgName}
              </p>

              <!-- Divider -->
              <div style="height:1px;background:#e8eefc;margin-bottom:32px;"></div>

              <!-- Fields table -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                ${field('Full Name', fullName)}
                ${field('Work Email', `mailto:${workEmail}`, true)}
                ${field('Organization', orgName)}
                ${field('Website', website, true)}
                ${field('How they heard', howHeard)}
              </table>

              ${message ? `
              <!-- Message block -->
              <div style="margin-top:28px;padding:20px 24px;background:#f3f6fe;
                          border-radius:10px;border-left:3px solid #1950C6;">
                <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:.08em;
                           text-transform:uppercase;color:#1950C6;">Message</p>
                <p style="margin:0;font-size:15px;color:#282b31;line-height:1.65;white-space:pre-wrap;">${message}</p>
              </div>` : ''}

              <!-- CTA -->
              <div style="margin-top:32px;padding-top:28px;border-top:1px solid #e8eefc;
                          display:flex;gap:12px;">
                <a href="mailto:${workEmail}"
                   style="display:inline-block;background:#1950C6;color:#ffffff;
                          font-size:13px;font-weight:600;text-decoration:none;
                          padding:11px 22px;border-radius:8px;letter-spacing:.01em;">
                  Reply to ${fullName.split(' ')[0]}
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;text-align:center;">
              <p style="margin:0 0 4px;font-size:12px;color:#8a8f99;">
                Sent via the contact form at
                <a href="${siteUrl}" style="color:#1950C6;text-decoration:none;">${siteUrl.replace('https://', '')}</a>
              </p>
              <p style="margin:0;font-size:11px;color:#8a8f99;letter-spacing:.04em;">
                GlobalCodio · AI Workforce for Global Immigration
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

export async function POST(request) {
  const body = await request.json();
  const { fullName, workEmail, orgName, website, howHeard, message } = body;

  if (!fullName || !workEmail || !orgName || !website || !howHeard) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Save to Sanity first (non-blocking on failure - email is the critical path)
  try {
    await saveFormSubmission({ fullName, workEmail, orgName, website, howHeard, message });
  } catch (err) {
    console.error('[contact] Sanity write failed (non-fatal):', err.message);
  }

  // Send email notification
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: workEmail,
      subject: `New enquiry from ${fullName} - ${orgName}`,
      html: buildEmailHtml({ fullName, workEmail, orgName, website, howHeard, message }),
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error('[contact] Email send failed:', err.message);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
