import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntries(contentType) {
  const entries = await client.getEntries({ content_type: contentType });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType}.`);
}

export default client;
