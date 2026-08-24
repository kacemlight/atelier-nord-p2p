import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 's1',
    title: 'Full Interior Design',
    subtitle: 'From blank canvas to finished room',
    description:
      'Our comprehensive design service covers every layer of a project — spatial planning, material selection, furniture design, lighting, and styling. We act as the single point of coordination for all specialist trades, and we do not consider a project complete until the space is photographed and every snag is resolved. This is the service for clients who want to hand over the complexity and receive a home or hospitality space that could not have been made without us.',
    deliverables: [
      'Full concept presentation with mood boards and spatial renders',
      'Material and finish schedules',
      'Custom furniture design and sourcing',
      'Lighting design and specification',
      'Trade coordination and site supervision',
      'Styling and final installation',
      'Post-project documentation pack',
    ],
    process: [
      {
        step: 1,
        title: 'Discovery',
        description:
          'A structured conversation about how you live, what you love, and what is not working. We visit the space and read it carefully before forming any opinions.',
      },
      {
        step: 2,
        title: 'Concept',
        description:
          'We develop a single strong direction — not three options — rooted in the brief and the particularities of the space. Mood boards, material samples, and spatial sketches.',
      },
      {
        step: 3,
        title: 'Design Development',
        description:
          'The concept becomes a set of precise drawings, specifications, and schedules. Every decision is documented. Every supplier is briefed.',
      },
      {
        step: 4,
        title: 'Realisation',
        description:
          'We coordinate all trades, manage delivery schedules, and maintain quality control from the first day on site to the last. You receive regular progress reports.',
      },
      {
        step: 5,
        title: 'Completion',
        description:
          'Final installation, styling, and a thorough snag review. The project is finished when it is right, not when the deadline arrives.',
      },
    ],
  },
  {
    id: 's2',
    title: 'Renovation Consulting',
    subtitle: 'Expert guidance at any stage',
    description:
      'For clients who are managing their own renovation but need a practised eye to set them on the right course, resolve a problem, or review decisions before they become expensive. We offer structured consulting engagements — a single intensive session, a short retainer, or a series of reviews at key project stages — designed to give you exactly the input you need without the overhead of a full commission.',
    deliverables: [
      'Project brief and scope review',
      'Material palette recommendations',
      'Contractor and supplier recommendations',
      'Layout and spatial planning review',
      'Written summary of findings and recommendations',
      'Follow-up Q&A session',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Review',
        description:
          'You share your plans, references, and concerns. We read everything before we meet.',
      },
      {
        step: 2,
        title: 'Site or Video Session',
        description:
          'An intensive working session — on-site or remote — where we work through the specific questions and decisions you are facing.',
      },
      {
        step: 3,
        title: 'Written Recommendations',
        description:
          'A clear written summary of our findings, recommendations, and any follow-up actions — yours to share with your contractor or architect.',
      },
    ],
  },
  {
    id: 's3',
    title: 'Furniture Curation',
    subtitle: 'Objects chosen with the same care as architecture',
    description:
      'Furniture and objects are not afterthoughts — they complete the work. We offer a standalone curation service for clients who have finished the architecture and need a practised eye to select, source, and position the pieces that will make the space alive. We draw on a network of makers, galleries, and vintage dealers built over nine years of practice, and we present only what is right for your specific space.',
    deliverables: [
      'Curated furniture and object selection with rationale',
      'Scaled floor plan with positioning',
      'Access to trade suppliers and exclusive pieces',
      'Vintage and antique sourcing',
      'Procurement management and delivery coordination',
      'Final placement and styling',
    ],
    process: [
      {
        step: 1,
        title: 'Space Reading',
        description:
          'We spend time in (or with plans of) the finished space, identifying its scale, light, and character before making any recommendations.',
      },
      {
        step: 2,
        title: 'Selection Presentation',
        description:
          'A curated edit of furniture, lighting, and objects — presented with context, dimensions, and positioning rationale.',
      },
      {
        step: 3,
        title: 'Procurement & Installation',
        description:
          'We manage all orders, deliveries, and the final installation day. You arrive to a finished room.',
      },
    ],
  },
];
