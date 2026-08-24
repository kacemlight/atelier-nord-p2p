import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { services } from '@/data/services';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Services',
  description: 'Three focused design services: full interior design, renovation consulting, and furniture curation.'
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <div className="container">
          <div className={styles.pageHeader}>
            <p className={styles.eyebrow}>What we offer</p>
            <h1 className={styles.heading}>Services</h1>
            <p className={styles.intro}>
              Three focused offers, each designed around a different kind of client
              relationship. We do not offer everything — we offer three things done
              without concession.
            </p>
          </div>

          <div className={styles.services}>
            {services.map((service, index) => (
              <section key={service.id} className={styles.service} id={service.id}>
                <div className={styles.serviceHeader}>
                  <span className={styles.serviceNumber}>0{index + 1}</span>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                </div>
                <div className={styles.serviceBody}>
                  <p className={styles.serviceDesc}>{service.description}</p>

                  <div className={styles.process}>
                    <h3 className={styles.processHeading}>The process</h3>
                    <ol className={styles.steps}>
                      {service.processSteps.map((step) => (
                        <li key={step.number} className={styles.step}>
                          <div className={styles.stepNumber}>{step.number}</div>
                          <div className={styles.stepContent}>
                            <h4 className={styles.stepTitle}>{step.title}</h4>
                            <p className={styles.stepDesc}>{step.description}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className={styles.deliverables}>
                    <h3 className={styles.deliverablesHeading}>What you receive</h3>
                    <ul className={styles.deliverableList}>
                      {service.deliverables.map((d) => (
                        <li key={d} className={styles.deliverableItem}>
                          <span className={styles.deliverableMark} aria-hidden="true">—</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Ready to start?</h2>
            <p className={styles.ctaText}>
              Tell us about your project. We read every inquiry and respond within two working days.
            </p>
            <Link href="/contact" className={styles.ctaBtn}>Begin the conversation</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
