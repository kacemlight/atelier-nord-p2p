import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'full-interior-design',
    title: 'Full Interior Design',
    tagline: 'From first conversation to final installation.',
    description:
      'Our most complete engagement. We take a space from concept to completion — handling every material decision, every supplier relationship, and every site visit, so that you receive a finished interior without having to orchestrate it yourself. This service is built around close collaboration: we listen before we propose, and we refine until the result is genuinely yours.',
    deliverables: [
      'Initial discovery session and site assessment',
      'Concept direction and mood board presentation',
      'Spatial planning and furniture layout',
      'Complete material and finish specification',
      'Bespoke furniture design where required',
      'Supplier and artisan sourcing',
      'Full FF&E procurement management',
      'Contractor briefing and coordination',
      'Regular site visits throughout construction',
      'Final styling and installation',
    ],
    process: [
      {
        step: 1,
        title: 'Discovery',
        description:
          'We meet at the site and spend time understanding how you live, what you value, and what the space needs to become. No questionnaires — a real conversation.',
      },
      {
        step: 2,
        title: 'Concept',
        description:
          'We present a single, fully considered direction: spatial layout, material palette, and the key furniture pieces that define the atmosphere.',
      },
      {
        step: 3,
        title: 'Design Development',
        description:
          'We refine every detail — custom drawings, finish samples, supplier meetings — until the specification is complete and construction-ready.',
      },
      {
        step: 4,
        title: 'Procurement & Build',
        description:
          'We manage all orders, deliveries, and contractor relationships. You are informed, never burdened.',
      },
      {
        step: 5,
        title: 'Installation',
        description:
          'We oversee the final installation personally — furniture placed, art hung, every surface as specified — and hand over a home ready to live in.',
      },
    ],
  },
  {
    id: 'renovation-consulting',
    title: 'Renovation Consulting',
    tagline: 'Expert guidance for clients who hold the reins.',
    description:
      'For clients who have their own architect, contractor, or project manager — but need a rigorous design voice to guide material choices, resolve spatial questions, and prevent the costly mistakes that accumulate when these decisions are made in isolation. We join your existing team as a senior design consultant, available at the moments that matter most.',
    deliverables: [
      'Onboarding assessment of existing plans and specifications',
      'Design critique and recommendation report',
      'Material and finish consultation sessions',
      'Response to contractor and architect queries',
      'Milestone site visits (foundation, shell, finish stages)',
      'Furniture and artisan recommendations',
      'Final walkthrough and punchlist review',
    ],
    process: [
      {
        step: 1,
        title: 'Onboarding',
        description:
          "We review all existing plans, specifications, and budgets, and meet your team to understand the project's current state and open questions.",
      },
      {
        step: 2,
        title: 'Design Audit',
        description:
          'We deliver a frank assessment of where the project is strong, where it is at risk, and which decisions need to be revisited before they become permanent.',
      },
      {
        step: 3,
        title: 'Ongoing Consultation',
        description:
          "We are available for scheduled sessions and critical-path decisions — a senior design voice when you need one, not when you don't.",
      },
      {
        step: 4,
        title: 'Site Milestones',
        description:
          'We attend key site moments — shell completion, first fix, second fix — to assess quality, flag issues, and keep the finish specification on track.',
      },
    ],
  },
  {
    id: 'furniture-curation',
    title: 'Furniture Curation',
    tagline: 'The right objects, for the right space, from the right hands.',
    description:
      'A focused service for spaces that are architecturally resolved but need furnishing with intelligence and restraint. We select, source, and procure furniture, lighting, textiles, and objects — drawing on nine years of supplier relationships across France, Italy, Scandinavia, and beyond. The result is a coherent interior, not a curated shopping list.',
    deliverables: [
      'Space and lifestyle assessment',
      'Curated furniture and object edit (minimum 3 options per key piece)',
      'Lighting specification and sourcing',
      'Textile selection: rugs, curtains, upholstery',
      'Trade pricing and procurement management',
      'Delivery scheduling and installation coordination',
      'Post-installation review session',
    ],
    process: [
      {
        step: 1,
        title: 'Assessment',
        description:
          'We visit the space, photograph and measure, and discuss your habits, tastes, and the pieces you may already own and wish to keep.',
      },
      {
        step: 2,
        title: 'Edit',
        description:
          'We present a curated selection of furniture, lighting, and objects — each piece chosen for its relationship to the others, not in isolation.',
      },
      {
        step: 3,
        title: 'Procurement',
        description:
          'We handle all orders at trade pricing, manage delivery windows, and resolve any quality or logistics issues before they reach you.',
      },
      {
        step: 4,
        title: 'Installation',
        description:
          'We supervise placement and styling on installation day, making real-time adjustments until the space reads exactly as designed.',
      },
    ],
  },
];

/**
 * Return a service by its id slug.
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
