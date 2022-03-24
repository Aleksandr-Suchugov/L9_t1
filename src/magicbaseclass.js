import Character from "./character.js";

export default class MagicBaseClass extends Character {
    constructor(name, type, health, level, attack_private, defence) {
        super(name, type, health, level, attack_private, defence);
        this._attack;
    }

    get stoned() {
        return this._attack;
    }

    set stoned(cell) {
        this._attack = this.attack_private - 5 * Math.log2(cell);
        if (this._attack < 0) {
            this._attack = 0;
        }
    }

    get attack() {
        return this._attack;
    }

    set attack(cell) {
        if (cell > 10) {
            cell = 10;
        }
        this._attack = ( 1 - cell / 10 ) * this.attack_private;
    }
}