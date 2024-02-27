import Character from './Character.js';

test('Проверка существующей ошибки', () => {
  const item = new Character(10, 2);
  expect(item.attack).toBe(9);
});

test('Проверка stonet = true', () => {
  const item = new Character(10, 1);
  item.stoned = true;
  expect(item.stoned).toBe(true);
});

test('Проверка аттаки + stoned', () => {
  const item = new Character(null, 2);
  item.attack = 100;
  item.stoned = true;
  expect(item.attack).toBe(85);
});

test('Проверка аттаки 0', () => {
  const item = new Character(0, 2);
  expect(item.attack).toBe(0);
});
