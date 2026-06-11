import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas/index';

export default defineConfig({
  name: 'globalcodio',
  title: 'GlobalCodio',
  // projectId/dataset are public (they ship in the browser bundle), so hardcode
  // them with an env fallback. Env vars aren't available in the hosted
  // *.sanity.studio build, so the literals are what make the deployed Studio work.
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1ll6raj6',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: S =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Blog Posts')
              .child(
                S.documentList()
                  .title('Blog Posts')
                  .filter('_type == "blogPost"')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
              ),
            S.listItem()
              .title('Authors')
              .child(S.documentList().title('Authors').filter('_type == "author"')),
            S.listItem()
              .title('Events')
              .child(
                S.documentList()
                  .title('Events')
                  .filter('_type == "event"')
                  .defaultOrdering([{ field: 'startDate', direction: 'asc' }])
              ),
            S.divider(),
            S.listItem()
              .title('Form Submissions')
              .child(
                S.documentList()
                  .title('Form Submissions')
                  .filter('_type == "formSubmission"')
                  .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
              ),
          ]),
    }),
  ],

  schema: { types: schemaTypes },
});
