import { services } from '@/data/services';

describe('services data', () => {
  it('exports exactly 3 services', () => {
    expect(services).toHaveLength(3);
  });

  it('every service has required fields', () => {
    for (const s of services) {
      expect(s.id).toBeTruthy();
      expect(s.title).toBeTruthy();
      expect(s.description.length).toBeGreaterThan(50);
      expect(s.processSteps.length).toBeGreaterThan(0);
      expect(s.deliverables.length).toBeGreaterThan(0);
    }
  });

  it('process steps are numbered sequentially starting at 1', () => {
    for (const s of services) {
      s.processSteps.forEach((step, i) => {
        expect(step.number).toBe(i + 1);
      });
    }
  });

  it('service IDs are unique', () => {
    const ids = services.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
