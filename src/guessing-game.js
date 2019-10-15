class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.mMin = min;
        this.mMax = max;

        this.a = [];
        for (var i = 0; i < this.mMax - this.mMin + 1; i++) {
            this.a[i] = this.mMin + i;
        }

    }

    guess() {
        this.mid = (this.mMin + this.mMax) / 2;

        if (this.mid > parseInt(this.mid)) {
            this.mid = this.mid + 0.5;
        }

        return this.a[this.mid];
        
    }

    lower() {
        this.mMax = this.mid;
    }

    greater() {
        this.mMin = this.mid;
    }
}

module.exports = GuessingGame;