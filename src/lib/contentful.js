import { createClient } from 'contentful';

// Mock data to use as fallback when Contentful credentials are missing
const mockBlogPosts = [
  {
    fields: {
      title: 'Introducing GeauxSpecialist Solutions',
      excerpt: 'Learn about our innovative approach to solving complex business challenges.',
      slug: 'introducing-geauxspecialist',
      image: {
        fields: {
          file: {
            url: '/images/blog/blog-post-1.jpg'
          }
        }
      }
    }
  },
  {
    fields: {
      title: 'AI in Modern Education',
      excerpt: 'How artificial intelligence is transforming the educational landscape.',
      slug: 'ai-in-education',
      image: {
        fields: {
          file: {
            url: '/images/blog/blog-post-2.jpg'
          }
        }
      }
    }
  },
  {
    fields: {
      title: 'The Future of Legacy Preservation',
      excerpt: 'Digital technologies that are helping families preserve memories for generations.',
      slug: 'future-of-legacy-preservation',
      image: {
        fields: {
          file: {
            url: '/images/blog/blog-post-3.jpg'
          }
        }
      }
    }
  }
];

// Check if required environment variables are available
const hasCredentials = 
  process.env.CONTENTFUL_SPACE_ID && 
  process.env.CONTENTFUL_ACCESS_TOKEN;

// Create client only if credentials are available
const client = hasCredentials 
  ? createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })
  : null;

export async function fetchEntries(contentType) {
  // If client is available, fetch real data
  if (client) {
    try {
      const entries = await client.getEntries({ content_type: contentType });
      if (entries.items) return entries.items;
      console.log(`Error getting Entries for ${contentType}.`);
      return [];
    } catch (error) {
      console.error(`Error fetching contentful data: ${error.message}`);
      return getMockData(contentType);
    }
  } 
  
  // Otherwise use mock data
  console.warn('Contentful client not initialized. Using mock data.');
  return getMockData(contentType);
}

function getMockData(contentType) {
  switch(contentType) {
    case 'blogPost':
      return mockBlogPosts;
    default:
      return [];
  }
}

export default client;
