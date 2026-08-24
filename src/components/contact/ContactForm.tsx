'use client';

import { useState, type FormEvent } from 'react';
import type { InquiryFormData, BudgetRange } from '@/types';
import styles from './ContactForm.module.css';

const PROJECT_TYPES = ['Residential', 'Hospitality', 'Commercial', 'Other'] as const;
const BUDGET_RANGES: BudgetRange[] = [
  'Under \u20ac50k',
  '\u20ac50k \u2013 \u20ac150k',
  '\u20ac150k \u2013 \u20ac500k',
  '\u20ac500k \u2013 \u20ac1M',
  'Above \u20ac1M'
];

type FormErrors = Partial<Record<keyof InquiryFormData, string>>;

export default function ContactForm() {
  const [form, setForm] = useState<InquiryFormData>({
    name: '',
    email: '',
    projectType: 'Residential',
    budgetRange: '\u20ac50k \u2013 \u20ac150k',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Please enter your name.';
    if (!form.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim() || form.message.trim().length < 20) {
      errs.message = 'Please tell us a little more about your project (at least 20 characters).';
    }
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // In production, POST to an API route or third-party form handler
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success} data-testid="contact-form-success">
        <p className={styles.successIcon} aria-hidden="true">—</p>
        <h2 className={styles.successTitle}>Thank you, {form.name.split(' ')[0]}.</h2>
        <p className={styles.successText}>
          We have received your enquiry and will be in touch within two working days.
        </p>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      data-testid="contact-form"
    >
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>Full name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          aria-describedby={errors.name ? 'name-error' : undefined}
          aria-invalid={!!errors.name}
          data-testid="contact-input-name"
        />
        {errors.name && (
          <p id="name-error" className={styles.error} role="alert" data-testid="contact-error-name">
            {errors.name}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
          data-testid="contact-input-email"
        />
        {errors.email && (
          <p id="email-error" className={styles.error} role="alert" data-testid="contact-error-email">
            {errors.email}
          </p>
        )}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="projectType" className={styles.label}>Project type</label>
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className={styles.select}
            data-testid="contact-select-projectType"
          >
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="budgetRange" className={styles.label}>Budget range</label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={form.budgetRange}
            onChange={handleChange}
            className={styles.select}
            data-testid="contact-select-budgetRange"
          >
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>About your project</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          placeholder="Tell us about the space, the timeline, and what you hope for."
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
          data-testid="contact-textarea-message"
        />
        {errors.message && (
          <p id="message-error" className={styles.error} role="alert" data-testid="contact-error-message">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className={styles.submit} data-testid="contact-submit">
        Send enquiry
      </button>
    </form>
  );
}
