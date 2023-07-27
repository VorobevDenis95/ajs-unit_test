export default function getHealth(hero) {
  if (hero.health > 50) {
    return 'healthy';
  }
  if (hero.health <= 50 && hero.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
