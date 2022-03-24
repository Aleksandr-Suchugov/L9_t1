import MagicBaseClass from "./magicbaseclass.js";

export default class Daemon extends MagicBaseClass {
  constructor(name, type, health, level, attack_private, defence, _attack) {
    super(name, type = 'Daemon', health = 100, level = 1, attack_private = 10, defence = 40, _attack);
  }
}
