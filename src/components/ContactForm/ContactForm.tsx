'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  budgetRange?: string;
  message?: string;
}

const projectTypes = [
  'Residential — Primary Residence',
  'Residential — Secondary Home',
  'Hospitality — Boutique Hotel',
  'Hospitality — Restaurant / Bar',
  'Commercial — Office / Workspace',
  'Other',
];

const budgetRanges = [
  'Under €50,000',
  '€50,000 – €150,000',
  '€150,000 – €500,000',
  '€500,000 – €1,000,000',
  'Over €1,000,000',
  'Not yet defined',
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!data.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.projectType) errors.projectType = 'Please select a project type.';
  if (!data.budgetRange) errors.budgetRange = 'Please select a budget range.';
  if (!data.message.trim()) errors.message = 'Please tell us about your project.';
  else if (data.message.trim().length < 20) errors.message = 'Please provide a bit more detail (at least 20 characters).';
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', projectType: '', budgetRange: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormData]) {
      const next = { ...form, [name]: value };
      const errs = validate(next);
      setErrors((prev) => ({ ...prev, [name]: errs[name as keyof FormErrors] }));
    }
  }

  function handleBlur(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validate(form);
    setErrors((prev) => ({ ...prev, [name]: errs[name as keyof FormErrors] }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    setTouched({ name: true, email: true, projectType: true, budgetRange: true, message: true });
    if (Object.keys(errs).length > 0) return;
    setStatus('submitting');
    // Simulate async submission
    setTimeout(() => setStatus('success'), 1200);
  }

  if (status === 'success') {
    return (
      <div className={styles.success} role="alert">
        <p className={styles.successTitle}>Message received.</p>
        <p className={styles.successText}>Thank you for reaching out. We will be in touch within two working days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">Full Name</label>
        <input
          id="name" name="name" type="text"
          className={`${styles.input} ${errors.name && touched.name ? styles.inputError : ''}`}
          value={form.name} onChange={handleChange} onBlur={handleBlur}
          placeholder="Claire Dupont"
          autoComplete="name"
        />
        {errors.name && touched.name && <span className={styles.error} role="alert">{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">Email Address</label>
        <input
          id="email" name="email" type="email"
          className={`${styles.input} ${errors.email && touched.email ? styles.inputError : ''}`}
          value={form.email} onChange={handleChange} onBlur={handleBlur}
          placeholder="claire@example.com"
          autoComplete="email"
        />
        {errors.email && touched.email && <span className={styles.error} role="alert">{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="projectType">Project Type</label>
        <select
          id="projectType" name="projectType"
          className={`${styles.select} ${errors.projectType && touched.projectType ? styles.inputError : ''}`}
          value={form.projectType} onChange={handleChange} onBlur={handleBlur}
        >
          <option value="">Select a category…</option>
          {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.projectType && touched.projectType && <span className={styles.error} role="alert">{errors.projectType}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="budgetRange">Budget Range</label>
        <select
          id="budgetRange" name="budgetRange"
          className={`${styles.select} ${errors.budgetRange && touched.budgetRange ? styles.inputError : ''}`}
          value={form.budgetRange} onChange={handleChange} onBlur={handleBlur}
        >
          <option value="">Select a range…</option>
          {budgetRanges.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
        {errors.budgetRange && touched.budgetRange && <span className={styles.error} role="alert">{errors.budgetRange}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Tell Us About Your Project</label>
        <textarea
          id="message" name="message"
          className={`${styles.textarea} ${errors.message && touched.message ? styles.inputError : ''}`}
          rows={5}
          value={form.message} onChange={handleChange} onBlur={handleBlur}
          placeholder="Describe your space, your vision, and what you hope to achieve…"
        />
        {errors.message && touched.message && <span className={styles.error} role="alert">{errors.message}</span>}
      </div>

      <button
        type="submit"
        className={styles.submit}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
      </button>
    </form>
  );
}
