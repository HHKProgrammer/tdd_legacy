import { Item } from './Item.mjs';

export class BackstagePass {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateQuality() {
        this.sellIn -= 1;

        if (this.sellIn < 0) {
            this.quality = 0;
        } else if (this.sellIn < 5) {
            this.quality = Math.min(this.quality + 3, 50);
        } else if (this.sellIn < 10) {
            this.quality = Math.min(this.quality + 2, 50);
        } else {
            this.quality = Math.min(this.quality + 1, 50);
        }
    }
}
