import { describe, test } from "vitest";
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
  test("Normal item decreases in quality and sell inn each day", () => {
    const shop = new Shop([new Item("Normal Item", 10, 20)]);
    shop.updateQuality();
    const [item] = shop.items;
    expect(item.sellIn).to.equal(9);
    expect(item.quality).to.equal(19);
  });
  test("Quality of normal item is never negative", () => {
    const shop = new Shop([new Item("Normal Item", 5, 0)]);
    shop.updateQuality();
    const [item] = shop.items;
    expect(item.quality).to.equal(0);
  });

  test("Aged Brie increases in quality over time", () => {
    const shop = new Shop([new Item("Aged Brie", 2, 0)]);
    shop.updateQuality();
    const [item] = shop.items;
    expect(item.quality).to.equal(1);
  });

  test("Sulfuras never decreases in quality or sellIn", () => {
    const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    shop.updateQuality();
    expect(shop.items[0].quality).to.equal(80);
    expect(shop.items[0].sellIn).to.equal(0);
  });

  test("Backstage passes increase in quality as sellIn approaches", () => {
    const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    shop.updateQuality();
    expect(shop.items[0].quality).to.equal(21);
  });
  test("Backstage passes quality increases by 2 when 10 days or less", () => {
    const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
    shop.updateQuality();
    expect(shop.items[0].quality).to.equal(22);
  });

  test("Backstage passes quality increases by 3 when 5 days or less", () => {
    const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]);
    shop.updateQuality();
    expect(shop.items[0].quality).to.equal(23);
  });
  test("Backstage passes quality drops to 0 after concert", () => {
    const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
    shop.updateQuality();
    expect(shop.items[0].quality).to.equal(0);
  });
  test("Expired item decreases quality twice as fast", () => {
    const shop = new Shop([new Item("Normal Item", -1, 20)]);
    shop.updateQuality();
    expect(shop.items[0].quality).to.equal(18);
  });
  test("Expired Aged Brie increases quality by 2", () => {
    const shop = new Shop([new Item("Aged Brie", -1, 10)]);
    shop.updateQuality();
    expect(shop.items[0].quality).to.equal(12);
  });


});
