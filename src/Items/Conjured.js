import { Item } from './Item.mjs';

export class Conjured  extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    updateQuality() {
        let degradationRate = 2;
        if (this.sellIn <= 0) {
            degradationRate *= 2; // Double the degradation rate if sellIn is 0 or below
        }
        /*
        if (this.quality <= 0) {
            this.quality -= 4;
        }else {
            this.quality -= 2;
        }*/
        this.quality -= degradationRate;

        this.sellIn -= 1;

        if (this.quality < 0) {
            this.quality = 0;
        }
    }
}
