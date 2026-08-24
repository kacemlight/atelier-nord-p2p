import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'full-design',
    title: 'Full Interior Design',
    description:
      'End-to-end design direction from first brief to final installation. We take a project from its raw condition — architectural, spatial, atmospheric — and carry it through every decision to a finished interior. This is the complete service: concept, specification, contractor coordination, and installation oversight. Nothing left to chance, nothing delegated to chance.',
    processSteps: [
      {
        number: 1,
        title: 'Discovery',
        description:
          'A thorough conversation about how you live, what you value, and what the space must do. We visit the site at different times of day, read the architecture, and understand what we are working with before we propose anything.'
      },
      {
        number: 2,
        title: 'Concept',
        description:
          'A spatial and material direction presented in a concise document: reference, palette, key pieces, and the logic connecting them. This is where we make the argument for the design before committing to it.'
      },
      {
        number: 3,
        title: 'Design Development',
        description:
          'Floor plans, elevations, detailed joinery drawings, complete material and furniture specifications. Every decision documented with enough precision that contractors can build from it.'
      },
      {
        number: 4,
        title: 'Delivery',
        description:
          'We manage the contractor relationship through construction, source and place furniture and objects, and oversee installation to completion. We are present at every stage that matters.'
      }
    ],
    deliverables: [
      'Full concept presentation',
      'Spatial plans and elevations',
      'Complete material specification',
      'Furniture and lighting schedule',
      'Contractor coordination',
      'Installation oversight',
      'Snag review and sign-off'
    ]
  },
  {
    id: 'renovation-consulting',
    title: 'Renovation Consulting',
    description:
      'Targeted design guidance for clients who have contractors in place or prefer to manage delivery themselves. We define the design direction with precision — materials, spatial interventions, key furniture pieces — and hand over a specification complete enough to execute without us. A focused service for clients who know what they need.',
    processSteps: [
      {
        number: 1,
        title: 'Site Review',
        description:
          'We assess the existing space, understand the scope of the renovation, and identify the decisions that will shape the outcome. A structured visit with follow-up questions, not a general look around.'
      },
      {
        number: 2,
        title: 'Design Direction',
        description:
          'A written and visual brief defining the material palette, spatial moves, and furniture approach. Specific enough to price and build from; clear enough to adapt where the site demands it.'
      },
      {
        number: 3,
        title: 'Specification Handover',
        description:
          'A complete package of references, schedules, and sourcing guidance. We remain available for questions during execution at an agreed rate.'
      }
    ],
    deliverables: [
      'Site review and written assessment',
      'Material and finish specification',
      'Furniture and fixture recommendations',
      'Sourcing guidance with supplier contacts',
      'Design direction document',
      'Two rounds of revision'
    ]
  },
  {
    id: 'furniture-curation',
    title: 'Furniture Curation',
    description:
      'A selection service for spaces that need considered objects, not a shopping list. We work from your existing interior — its palette, its proportions, its mood — and source furniture, lighting, and objects that belong. We access makers and ateliers that do not sell through retail, and we know the difference between a piece that photographs well and one that improves with fifteen years of daily use.',
    processSteps: [
      {
        number: 1,
        title: 'Interior Assessment',
        description:
          'We spend time in the space — or study it thoroughly through documentation — to understand its proportions, light, and existing character. The curation begins with listening.'
      },
      {
        number: 2,
        title: 'Curation & Sourcing',
        description:
          'We develop a curated selection from our network of European makers, ateliers, and carefully chosen secondary-market sources. Each piece is chosen for its relationship to the room, not for its label.'
      },
      {
        number: 3,
        title: 'Presentation & Refinement',
        description:
          'A visual presentation of the proposed selection with placement drawings, dimensions, and lead times. We refine until the selection is right.'
      }
    ],
    deliverables: [
      'Interior assessment report',
      'Curated furniture selection with placement plan',
      'Lighting and object recommendations',
      'Full sourcing with pricing and lead times',
      'Order management and delivery coordination',
      'Two rounds of revision'
    ]
  }
];
