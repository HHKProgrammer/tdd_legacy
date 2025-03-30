import { Item } from './Item.mjs';

export class NormalItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    updateQuality() {
        if (this.quality > 0) {
            this.quality -= 1;
        }
        this.sellIn -= 1;
    }
}
