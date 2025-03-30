import { Item } from './Item.mjs';

export class AgedBrie extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    updateQuality() {
        if (this.quality < 50) {
            this.quality += 1;
        }
        this.sellIn -= 1;
        if (this.sellIn < 0 && this.quality < 50) {
        this.quality += 1;
        }
    }
}
