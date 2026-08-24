import { teamMembers, pressMentions } from '@/data/team';

describe('team data', () => {
  it('has exactly 2 founders', () => {
    expect(teamMembers).toHaveLength(2);
  });

  it('every team member has required fields', () => {
    for (const m of teamMembers) {
      expect(m.id).toBeTruthy();
      expect(m.name).toBeTruthy();
      expect(m.role).toBeTruthy();
      expect(m.bio.length).toBeGreaterThan(50);
    }
  });
});

describe('press mentions', () => {
  it('has at least 3 press mentions', () => {
    expect(pressMentions.length).toBeGreaterThanOrEqual(3);
  });

  it('every mention has publication, title, and year', () => {
    for (const m of pressMentions) {
      expect(m.publication).toBeTruthy();
      expect(m.title).toBeTruthy();
      expect(typeof m.year).toBe('number');
    }
  });
});
