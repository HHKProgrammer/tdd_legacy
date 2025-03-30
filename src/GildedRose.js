import { NormalItem } from './items/NormalItem.js';
import { AgedBrie } from './items/AgedBrie.js';
import { Sulfuras } from './items/Sulfuras.js';
import { BackstagePass } from './items/BackstagePass.js';
import { Conjured } from './items/Conjured.js';
import { Item } from './items/Item.mjs';

export class GildedRose {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => item.updateQuality());
    }
}
