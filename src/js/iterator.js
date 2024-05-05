class Team {
    constructor(characters) {
        this.characters = characters;
        this.index = 0;
    }

    [Symbol.iterator]() {
        return this;
    }

    next() {
        if (this.index < this.characters.length) {
            return {
                value: this.characters[this.index++],
                done: false,
            };
        } else {
            return {
                value: undefined,
                done: true,
            };
        }
    }
}

export default Team;