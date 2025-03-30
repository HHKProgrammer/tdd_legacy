import { Item } from './Item.mjs';

export class AgedBrie {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateQuality() {
       /* this.sellIn -= 1;
        if (this.quality < 50) this.quality += 1;
        if (this.sellIn < 0 && this.quality < 50) this.quality += 1;
    */}
}
