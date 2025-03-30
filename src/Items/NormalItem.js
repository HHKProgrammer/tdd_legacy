import { Item } from './Item.mjs';

export class NormalItem {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateQuality() {
        this.sellIn--;
        this.quality = Math.max(0, this.quality - 1);
        if (this.sellIn < 0) {
            this.quality = Math.max(0, this.quality - 1);
        }
    }
}
