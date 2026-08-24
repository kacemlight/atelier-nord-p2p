import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact',
  description: 'Start a conversation with Atelier Nord about your project.'
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <div className="container">
          <div className={styles.layout}>
            {/* Left col */}
            <div className={styles.info}>
              <p className={styles.eyebrow}>Get in touch</p>
              <h1 className={styles.heading}>Start a project</h1>
              <p className={styles.intro}>
                We read every enquiry. Tell us about your project and we will
                respond within two working days.
              </p>

              <div className={styles.studioDetails}>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Studio</span>
                  <address className={styles.detailValue}>
                    7 Rue de Bretagne<br />
                    75003 Paris, France
                  </address>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>Email</span>
                  <a href="mailto:studio@ateliernord.fr" className={styles.detailLink}>
                    studio@ateliernord.fr
                  </a>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>New commissions</span>
                  <span className={styles.detailValue}>Open for 2025</span>
                </div>
              </div>
            </div>

            {/* Right col — form */}
            <div className={styles.formWrap}>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
