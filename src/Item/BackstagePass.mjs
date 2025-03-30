import { Item } from './Item.js';

export class BackstagePass extends Item {
    updateQuality() {
        this.sellIn -= 1;

        if (this.sellIn < 0) {
            this.quality = 0;
        } else if (this.sellIn < 5) {
            this.quality = Math.min(50, this.quality + 3);
        } else if (this.sellIn < 10) {
            this.quality = Math.min(50, this.quality + 2);
        } else {
            this.quality = Math.min(50, this.quality + 1);
        }
    }
}
