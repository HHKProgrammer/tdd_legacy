import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

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


});
