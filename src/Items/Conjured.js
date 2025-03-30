import { Item } from '../Item.js';

export class Conjured {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateQuality() {
        this.sellIn -= 1;
        this.quality = Math.max(this.quality - 2, 0);
        if (this.sellIn < 0) this.quality = Math.max(this.quality - 2, 0);
    }
}
