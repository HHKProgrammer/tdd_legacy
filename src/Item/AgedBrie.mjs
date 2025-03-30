import { Item } from './Item.js';

export class AgedBrie extends Item {
    updateQuality() {
        this.sellIn -= 1;
        this.quality = Math.min(50, this.quality + 1);
    }
}
