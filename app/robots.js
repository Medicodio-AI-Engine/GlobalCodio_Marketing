import { SITE_URL } from '../lib/navigation.js';

// AI search / answer-engine crawlers we explicitly welcome (AEO + GEO).
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Gemini-AI',
  'Applebot-Extended',
  'cohere-ai',
  'YouBot',
  'Diffbot',
  'Bytespider',
  'meta-externalagent',
  'Amazonbot',
  'DuckAssistBot',
  'MistralAI-User',
];

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    // No `host` directive: it was only ever honoured by Yandex, Google ignores it,
    // and the canonical host is already declared per-page via rel=canonical.
  };
}
