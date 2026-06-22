/** Days before startDate when the home-page event banner becomes visible. */
export const EVENT_BANNER_LEAD_DAYS = 10;

export function isWithinBannerWindow(startDate, now = new Date()) {
  if (!startDate) return false;

  const start = new Date(startDate);
  if (Number.isNaN(start.getTime()) || start < now) return false;

  const msUntilStart = start.getTime() - now.getTime();
  const leadMs = EVENT_BANNER_LEAD_DAYS * 24 * 60 * 60 * 1000;
  return msUntilStart <= leadMs;
}

function byStartDateAsc(a, b) {
  return new Date(a.startDate) - new Date(b.startDate);
}

function byStartDateDesc(a, b) {
  return new Date(b.startDate) - new Date(a.startDate);
}

/** Upcoming soonest first, then past with the most recent past event first. */
export function sortEventsForDisplay(events = []) {
  const upcoming = events.filter(e => e.status === 'upcoming').sort(byStartDateAsc);
  const past = events.filter(e => e.status === 'past').sort(byStartDateDesc);
  return [...upcoming, ...past];
}
