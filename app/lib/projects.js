import { Bot, Blocks } from 'lucide-react';

export const projects = [
  {
    name: 'Axon Bot',
    slug: 'axon',
    title: 'Axon',
    description:
      'A powerful Discord moderation and automation bot built for modern communities.',
    ctaPrimary: 'Invite Bot',
    ctaSecondary: 'Learn More',
    href: '/axon',
    icon: Bot,
    tags: ['Moderation', 'Automation', 'Reliability']
  },
  {
    name: 'DBL Platform',
    slug: 'dbl',
    title: 'DBL – Discord Bot List',
    description: 'A platform to discover and share Discord bots.',
    ctaPrimary: 'Open Platform',
    ctaSecondary: 'Explore Bots',
    href: '/projects',
    icon: Blocks,
    tags: ['Discovery', 'Ranking', 'Community']
  }
];

export const stats = [
  { label: 'Active Projects', value: '2+' },
  { label: 'Bots Listed', value: '1,200+' },
  { label: 'Servers Using Bots', value: '85,000+' },
  { label: 'Community Members', value: '260,000+' }
];

export const focusFeatures = [
  {
    title: 'Fast platforms',
    description: 'Performance-first architecture tuned for speed and scale.'
  },
  {
    title: 'Secure systems',
    description: 'Hardened infrastructure and best-practice security layers.'
  },
  {
    title: 'Developer friendly',
    description: 'Simple APIs, thoughtful docs, and tooling that just works.'
  },
  {
    title: 'Community driven',
    description: 'Built with feedback from creators, moderators, and builders.'
  }
];
