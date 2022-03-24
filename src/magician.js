import MagicBaseClass from "./magicbaseclass.js";

export default class Magician extends MagicBaseClass {
  constructor(name, type, health, level, attack_private, defence, _attack) {
    super(name, type = 'Magician', health = 100, level = 1, attack_private = 10, defence = 40, _attack);
  }
}
