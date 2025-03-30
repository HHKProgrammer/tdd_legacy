
export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    const updateHandlers = {
      "Aged Brie": this.updateAgedBrie,
      "Backstage passes to a TAFKAL80ETC concert": this.updateBackstagePass,
      "Sulfuras, Hand of Ragnaros": this.updateSulfuras,
      "Conjured": this.updateConjured,
      "default": this.updateNormalItem,
    };

    for (let item of this.items) {
      const handler = updateHandlers[item.name] || updateHandlers["default"];
      handler.call(this, item);
    }

    return this.items;
  }

  updateNormalItem(item) {
    item.sellIn -= 1;
    this.decreaseQuality(item);

    if (item.sellIn < 0) {
      this.decreaseQuality(item);
    }
  }

  updateAgedBrie(item) {
    item.sellIn -= 1;
    this.increaseQuality(item);

    if (item.sellIn < 0) {
      this.increaseQuality(item);
    }
  }

  updateBackstagePass(item) {
    item.sellIn -= 1;

    if (item.sellIn < 0) {
      item.quality = 0;
      return;
    }

    this.increaseQuality(item);

    if (item.sellIn < 10) this.increaseQuality(item);
    if (item.sellIn < 5) this.increaseQuality(item);
  }

  updateSulfuras(item) {
    // Legendary item, does not change.
  }

  updateConjured(item) {
    item.sellIn -= 1;
    this.decreaseQuality(item, 2);

    if (item.sellIn < 0) {
      this.decreaseQuality(item, 2);
    }
  }

  increaseQuality(item) {
    if (item.quality < 50) item.quality += 1;
  }

  decreaseQuality(item, amount = 1) {
    item.quality = Math.max(0, item.quality - amount);
  }
}
