import Character from './Character';

export default class Daemon extends Character {
  constructor(...arr) {
    super(...arr, 'Daemon');
  }
}
