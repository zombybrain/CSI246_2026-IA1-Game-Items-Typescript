"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rarity = exports.itemType = void 0;
var itemType;
(function (itemType) {
    itemType["Weapon"] = "weapon";
    itemType["Armor"] = "Armor";
    itemType["Consumable"] = "Consumable";
})(itemType || (exports.itemType = itemType = {}));
var rarity;
(function (rarity) {
    rarity["common"] = "common";
    rarity["uncommon"] = "uncommon";
    rarity["rare"] = "rare";
    rarity["legendary"] = "legendary";
    rarity["artifact"] = "artifact";
})(rarity || (exports.rarity = rarity = {}));
let sword = {
    type: itemType.Weapon,
    name: "steel sword",
    value: 140,
    rarity: rarity.common,
    description: "basic sword made of steel"
};
//# sourceMappingURL=itemTypes.js.map