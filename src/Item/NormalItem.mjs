import { Item } from './Item.js';

export class NormalItem extends Item {
    updateQuality() {
        this.sellIn -= 1;
        this.quality = Math.max(0, this.quality - (this.sellIn >= 0 ? 1 : 2));
    }
}
