import type { Certification } from '@/types/portfolio';

export const certifications = [
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    year: '2024',
    icon: '🏅',
    completed: true,
  },
  {
    title: 'Cisco CCNA Routing & Switching',
    issuer: 'Cisco Systems',
    year: '2024',
    icon: '🌐',
    completed: true,
  },
  {
    title: 'IBM Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    year: '2025',
    icon: '🤖',
    completed: true,
  },
] satisfies Certification[];
