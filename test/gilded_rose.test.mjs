import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("Normal item decreases in quality and sellIn each day", () => {
    const shop = new Shop([new Item("Normal Item", 10, 20)]);
    shop.updateQuality();
    const [item] = shop.items;
    expect(item.sellIn).to.equal(9);
    expect(item.quality).to.equal(19);
  });

});
