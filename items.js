"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bread = exports.helment = exports.bluePotion = exports.sword = void 0;
const itemTypes_1 = require("./itemTypes");
exports.sword = {
    type: itemTypes_1.itemType.Weapon,
    name: "steel sword",
    value: 140,
    rarity: itemTypes_1.rarity.common,
    description: "basic sword made of steel"
};
exports.bluePotion = {
    type: itemTypes_1.itemType.Consumable,
    name: "greater blue potion",
    value: 120,
    rarity: itemTypes_1.rarity.rare,
    description: "a enhanced potion that restores mana"
};
exports.helment = {
    type: itemTypes_1.itemType.Armor,
    name: "Mithrl helment of warding",
    value: 2450,
    rarity: itemTypes_1.rarity.artifact,
    description: "a mithirl hement with a enchentment that increses defense"
};
exports.bread = {
    type: itemTypes_1.itemType.Consumable,
    name: "bread",
    value: 20,
    rarity: itemTypes_1.rarity.common
};
//# sourceMappingURL=items.js.map