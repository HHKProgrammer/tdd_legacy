import { NormalItem } from './items/NormalItem.js';
import { AgedBrie } from './items/AgedBrie.js';
import { Sulfuras } from './items/Sulfuras.js';
import { BackstagePass } from './items/BackstagePass.js';
import { Conjured } from './items/Conjured.js';

export class GildedRose {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => item.updateQuality());
    return this.items;
  }
}

/*
export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const isConjured = item.name.toLowerCase().includes("conjured");
      const degradationRate = isConjured ? 2 : 1;

      if (item.name !== "Aged Brie" && item.name !== "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          if (item.name !== "Sulfuras, Hand of Ragnaros") {
            item.quality -= degradationRate;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality += 1;
          if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
            if (item.sellIn < 11) item.quality += 1;
            if (item.sellIn < 6) item.quality += 1;
          }
        }
      }

      if (item.name !== "Sulfuras, Hand of Ragnaros") item.sellIn -= 1;

      if (item.sellIn < 0) {
        if (item.name !== "Aged Brie") {
          if (item.name !== "Backstage passes to a TAFKAL80ETC concert") {
            if (item.quality > 0) {
              if (item.name !== "Sulfuras, Hand of Ragnaros") {
                item.quality -= degradationRate;
              }
            }
          } else {
            item.quality = 0;
          }
        } else if (item.quality < 50) {
          item.quality += 1;
        }
      }

      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        if (item.quality < 0) item.quality = 0;
        if (item.quality > 50) item.quality = 50;
      }
    }

    return this.items;
  }
}

 */

