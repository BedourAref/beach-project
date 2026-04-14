// SVG icons encoded as data URIs — no external dependencies
const svg = (path, viewBox = "0 0 24 24") =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="none" stroke="%234a9eff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`)}`;

export const dashboardAssets = {
  beachCover:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  metricTodayBookingsIcon: svg(
    '<path d="M5 11h14"/><path d="M7 11V8a5 5 0 0 1 10 0v3"/><path d="M6 11v5"/><path d="M18 11v5"/><path d="M5 16h14"/>'
  ),
  metricAverageRatingIcon: svg(
    '<path d="m12 3.5 2.6 5.2 5.7.8-4.1 4 1 5.7L12 16.7 6.8 19.2l1-5.7-4.1-4 5.7-.8L12 3.5Z"/>'
  ),
  metricRevenueIcon: svg(
    '<path d="M12 3v18"/><path d="M16.5 7.5c0-1.66-2.01-3-4.5-3s-4.5 1.34-4.5 3 2.01 3 4.5 3 4.5 1.34 4.5 3-2.01 3-4.5 3-4.5-1.34-4.5-3"/>'
  ),
  metricVisitorsIcon: svg(
    '<circle cx="9" cy="9" r="2.5"/><circle cx="15.5" cy="8" r="2"/><path d="M4.5 18c.6-2.4 2.5-3.8 4.5-3.8s3.9 1.4 4.5 3.8"/><path d="M13.3 14.6c1.7.2 3.2 1.2 4 3"/>'
  ),
  logoBadge: svg(
    '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 12h8"/><path d="M12 8v8"/>'
  ),
  logoWave: svg(
    '<path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/><path d="M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/>'
  ),
  beachThumb:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100&q=60",
};
