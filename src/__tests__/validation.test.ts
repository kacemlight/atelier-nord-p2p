// Pure validation logic extracted from ContactForm for unit testing

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormValues {
  name: string;
  email: string;
  message: string;
}

function validate(form: FormValues): Record<string, string> {
  const errs: Record<string, string> = {};
  if (!form.name.trim()) errs.name = 'Please enter your name.';
  if (!form.email.trim()) {
    errs.email = 'Please enter your email address.';
  } else if (!EMAIL_RE.test(form.email)) {
    errs.email = 'Please enter a valid email address.';
  }
  if (!form.message.trim() || form.message.trim().length < 20) {
    errs.message = 'Please tell us a little more about your project (at least 20 characters).';
  }
  return errs;
}

describe('contact form validation', () => {
  const valid = {
    name: 'Marie Dupont',
    email: 'marie@example.com',
    message: 'We are looking for a full interior redesign of our apartment in Lyon.'
  };

  it('returns no errors for valid input', () => {
    expect(validate(valid)).toEqual({});
  });

  it('requires name', () => {
    const errs = validate({ ...valid, name: '' });
    expect(errs.name).toBeTruthy();
  });

  it('requires email', () => {
    const errs = validate({ ...valid, email: '' });
    expect(errs.email).toBeTruthy();
  });

  it('rejects malformed email', () => {
    const errs = validate({ ...valid, email: 'not-an-email' });
    expect(errs.email).toBeTruthy();
  });

  it('accepts well-formed email', () => {
    const errs = validate({ ...valid, email: 'user@domain.co.uk' });
    expect(errs.email).toBeUndefined();
  });

  it('requires message of at least 20 chars', () => {
    const errs = validate({ ...valid, message: 'Too short.' });
    expect(errs.message).toBeTruthy();
  });

  it('accepts message of exactly 20 chars', () => {
    const errs = validate({ ...valid, message: 'Exactly twenty chars.' });
    expect(errs.message).toBeUndefined();
  });

  it('trims whitespace before checking message length', () => {
    const errs = validate({ ...valid, message: '   ' });
    expect(errs.message).toBeTruthy();
  });
});
