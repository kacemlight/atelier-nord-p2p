import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import styles from './Contact.module.css';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Begin a conversation with Atelier Nord. Tell us about your project and we will be in touch within two working days.',
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.intro}>
              <p className="eyebrow">Get in Touch</p>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                letterSpacing: 'var(--tracking-tight)',
                lineHeight: 'var(--leading-tight)',
                color: 'var(--color-text-primary)',
                marginTop: 'var(--space-4)',
                marginBottom: 'var(--space-8)',
              }}>
                Tell us about<br />
                <em style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>your project.</em>
              </h1>
              <p className={styles.introText}>
                We work with a small number of clients at any one time. If our practice feels like the right fit, we would like to hear from you. We respond to every inquiry within two working days.
              </p>

              <div className={styles.studioDetails}>
                <div className={styles.detailGroup}>
                  <span className={styles.detailLabel}>Studio</span>
                  <address className={styles.detailValue}>
                    12 Rue du Bac<br />
                    75007 Paris, France
                  </address>
                </div>
                <div className={styles.detailGroup}>
                  <span className={styles.detailLabel}>Email</span>
                  <a href="mailto:bonjour@ateliernord.fr" className={styles.detailLink}>bonjour@ateliernord.fr</a>
                </div>
                <div className={styles.detailGroup}>
                  <span className={styles.detailLabel}>Phone</span>
                  <a href="tel:+33142860000" className={styles.detailLink}>+33 1 42 86 00 00</a>
                </div>
              </div>
            </div>

            <div className={styles.formWrapper}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
