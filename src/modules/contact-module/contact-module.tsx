import { ContactForm } from "./components/contact-form";

export function ContactModule() {
  return (
    <main id="contact">
      <section className="portfolio-section contact-section" aria-label="Contact">
        <ContactForm />
      </section>
    </main>
  );
}
