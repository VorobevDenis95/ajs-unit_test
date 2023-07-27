import getHealth from '../hero';

test('health', () => {
  const hero = { name: 'Маг', health: 90 };
  const result = getHealth(hero);
  expect(result).toBe('healthy');
});
test('wounded', () => {
  const hero = { name: 'Маг', health: 40 };
  const result = getHealth(hero);
  expect(result).toBe('wounded');
});
test('critical', () => {
  const hero = { name: 'Маг', health: 5 };
  const result = getHealth(hero);
  expect(result).toBe('critical');
});
