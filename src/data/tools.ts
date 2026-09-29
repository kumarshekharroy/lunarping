import type { LunarTool } from '../types/tool'

// Priority determines display order everywhere, including search results.
export const tools: LunarTool[] = [
  {
    name: 'Endpoint',
    slug: 'endpoint',
    description: 'A modern playground for sending requests, testing endpoints, and getting to know an API.',
    url: 'https://endpoint.lunarping.com',
    category: 'Developer',
    priority: 1,
    featured: true,
    status: 'live',
  },
  {
    name: 'Markdown Viewer',
    slug: 'markdown',
    description: 'Drop in Markdown and see it rendered instantly in a clean, focused space.',
    url: 'https://md.lunarping.com',
    category: 'Developer',
    priority: 2,
    featured: true,
    status: 'live',
  },
  {
    name: 'Fullstack Prep',
    slug: 'fullstack-prep',
    description: 'Focused interview preparation for developers working across the stack.',
    url: 'https://fullstack-prep.lunarping.com',
    category: 'Career',
    priority: 3,
    status: 'live',
  },
  {
    name: 'JobDesk',
    slug: 'jobdesk',
    description: 'Keep applications, next steps, and the whole job search in one clear place.',
    url: 'https://jobdesk.lunarping.com',
    category: 'Productivity',
    priority: 4,
    status: 'live',
  },
  {
    name: 'Meri Kundli',
    slug: 'kundli',
    description: 'A modern space for exploring your Kundli and astrology.',
    url: 'https://kundli.lunarping.com',
    category: 'Utility',
    priority: 5,
    status: 'live',
  },
]
