import { Metadata } from 'next';
import styles from './Services.module.css';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Atelier Nord offers full interior design, renovation consulting, and furniture curation for residential and hospitality clients.',
};

const services = [
  {
    number: '01',
    title: 'Full Interior Design',
    tagline: 'From blank page to inhabited space.',
    description: 'Our complete design service takes a project from initial concept through to final installation. We manage every decision — spatial planning, material selection, custom joinery, furniture specification, lighting, and contractor coordination — so you can be as involved, or as removed, as you wish.',
    process: [
      { step: 'Discovery', detail: 'A single meeting to understand how you live, what moves you, and what the space demands of us.' },
      { step: 'Concept', detail: 'Mood boards, spatial studies, and a clear material direction presented for your response.' },
      { step: 'Design', detail: 'Technical drawings, detailed specifications, and a curated furniture plan.' },
      { step: 'Delivery', detail: 'We manage procurement, site visits, and final installation to the last object placed.' },
    ],
    receives: ['Concept presentation deck', 'Full technical drawings', 'Material & finish schedule', 'Furniture specification', 'Procurement management', 'Site coordination', 'Styling and installation'],
  },
  {
    number: '02',
    title: 'Renovation Consulting',
    tagline: 'Expert guidance at the moments that matter.',
    description: 'When you have a contractor in place and decisions to make, we step in as your design eye. Ideal for clients who want professional direction on materials, layout choices, and finish specification without the scope of a full commission.',
    process: [
      { step: 'Audit', detail: 'We assess the existing space and the renovation plan, identifying decisions that need design input.' },
      { step: 'Direction', detail: 'A clear brief for your contractor: layouts, finishes, and the moments worth investing in.' },
      { step: 'Review', detail: 'Key site visits at critical junctures to ensure the vision is being executed.' },
    ],
    receives: ['Space and flow recommendations', 'Material and finish selection', 'Supplier introductions', 'Up to four site review visits', 'Written design brief for contractors'],
  },
  {
    number: '03',
    title: 'Furniture Curation',
    tagline: 'The right objects, sourced with intent.',
    description: 'A room is defined as much by what is not there as what is. Our curation service builds a considered furniture and object plan for spaces that already have good bones — drawing on our network of European makers, vintage sources, and artisans to find pieces that feel singular.',
    process: [
      { step: 'Survey', detail: 'We photograph, measure, and live in the space briefly before making any recommendations.' },
      { step: 'Edit', detail: 'A curated selection of furniture, lighting, and objects, with clear rationale for each piece.' },
      { step: 'Source', detail: 'We handle procurement, logistics, and placement on your behalf.' },
    ],
    receives: ['Curated furniture proposal', 'Vintage and artisan sourcing', 'Budget breakdown by category', 'Procurement and delivery management', 'Placement and styling visit'],
  },
];

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <section className="section">
        <div className="container">
          <p className="eyebrow">What We Offer</p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
            letterSpacing: 'var(--tracking-tight)',
            lineHeight: 'var(--leading-tight)',
            color: 'var(--color-text-primary)',
            marginTop: 'var(--space-4)',
            marginBottom: 'var(--space-20)',
            maxWidth: '760px',
          }}>
            Three ways to work together.
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>All rooted in the same rigour.</em>
          </h1>

          <div className={styles.servicesList}>
            {services.map((service) => (
              <div key={service.number} className={styles.service}>
                <div className={styles.serviceHeader}>
                  <span className={styles.serviceNumber}>{service.number}</span>
                  <div>
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                    <p className={styles.serviceTagline}>{service.tagline}</p>
                  </div>
                </div>

                <div className={styles.serviceBody}>
                  <div className={styles.serviceDescription}>
                    <p>{service.description}</p>

                    <div className={styles.process}>
                      <h3 className={styles.processHeading}>The Process</h3>
                      <ol className={styles.processSteps}>
                        {service.process.map((p) => (
                          <li key={p.step} className={styles.processStep}>
                            <span className={styles.stepName}>{p.step}</span>
                            <span className={styles.stepDetail}>{p.detail}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className={styles.serviceReceives}>
                    <h3 className={styles.processHeading}>What You Receive</h3>
                    <ul className={styles.receiveList}>
                      {service.receives.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
