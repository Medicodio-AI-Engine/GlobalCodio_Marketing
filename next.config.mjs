/* Security headers applied to every route.
   CSP is intentionally non-breaking: it locks down framing, <base>, plugins and
   form targets without restricting script/style sources (Next inline scripts,
   GA and styled-components would need nonces for a strict script-src). */
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "form-action 'self'",
      'upgrade-insecure-requests',
    ].join('; '),
  },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
];

import { fileURLToPath } from 'node:url';

const pureForwardRefLoader = fileURLToPath(new URL('./scripts/pure-forwardref-loader.cjs', import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /[\\/]node_modules[\\/]@animateicons[\\/]react[\\/]dist[\\/].*\.js$/,
      use: [{ loader: pureForwardRefLoader }],
    });
    return config;
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default nextConfig;
