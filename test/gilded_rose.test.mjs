import { describe, test, it, expect  } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";
/* Well this is where it gets interesting:

	- Once the sell by date has passed, Quality degrades twice as fast
	- The Quality of an item is never negative
	- "Aged Brie" actually increases in Quality the older it gets
	- The Quality of an item is never more than 50
	- "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
	- "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
	Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
	Quality drops to 0 after the concert*/
describe("Gilded Rose", () => {

  it("Normal item decreases in quality and sellIn each day", () => {
    const shop = new Shop([new Item("Normal Item", 10, 20)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(19);
    expect(shop.items[0].sellIn).toBe(9);
  });

  it("Quality of normal item is never negative", () => {
    const shop = new Shop([new Item("Normal Item", 10, 0)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(0);
  });

  it("Aged Brie increases in quality over time", () => {
    const shop = new Shop([new Item("Aged Brie", 10, 30)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(31);
  });

  it("Sulfuras never decreases in quality or sellIn", () => {
    const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(80);
    expect(shop.items[0].sellIn).toBe(10);
  });

  it("Backstage passes increase in quality as sellIn approaches", () => {
    const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(21);
  });

  it("Backstage passes quality increases by 2 when 10 days or less", () => {
    const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(22);
  });

  it("Backstage passes quality increases by 3 when 5 days or less", () => {
    const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(23);
  });

  it("Backstage passes quality drops to 0 after concert", () => {
    const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(0);
  });

  // New tests for Conjured Items
  it("Conjured items degrade in quality twice as fast before sellIn date", () => {
    const shop = new Shop([new Item("Conjured Mana Cake", 10, 20)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(18);
    expect(shop.items[0].sellIn).toBe(9);
  });

  it("Conjured items degrade in quality twice as fast after sellIn date", () => {
    const shop = new Shop([new Item("Conjured Mana Cake", 0, 20)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(16);
    expect(shop.items[0].sellIn).toBe(-1);
  });

  it("Conjured items quality does not drop below 0", () => {
    const shop = new Shop([new Item("Conjured Mana Cake", 0, 1)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(0);
    expect(shop.items[0].sellIn).toBe(-1);
  });

  it("Conjured items degrade by 4 when sellIn is negative", () => {
    const shop = new Shop([new Item("Conjured Mana Cake", -1, 10)]);
    shop.updateQuality();
    expect(shop.items[0].quality).toBe(6);
    expect(shop.items[0].sellIn).toBe(-2);
  });
});
