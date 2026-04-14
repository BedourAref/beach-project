// SVG icons encoded as data URIs — no external dependencies
const svg = (path, viewBox = "0 0 24 24") =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="none" stroke="%23fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`)}`;

const svgDark = (path, viewBox = "0 0 24 24") =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="none" stroke="%23374151" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`)}`;

export const adminLoginAssets = {
  shieldIcon: svg(
    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'
  ),
  userIcon: svgDark(
    '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
  ),
  keyIcon: svgDark(
    '<path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/>'
  ),
  eyeIcon: svgDark(
    '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
  ),
  lockIcon: svgDark(
    '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
  ),
};
