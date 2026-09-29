import {itemType, rarity, item} from "./itemTypes";

export let sword: item = {
    type: itemType.Weapon,
    name: "steel sword",
    value: 140,
    rarity: rarity.common,
    description: "basic sword made of steel"
}

export let bluePotion: item = {
    type: itemType.Consumable,
    name: "greater blue potion",
    value: 120,
    rarity: rarity.rare,
    description: "a enhanced potion that restores mana"
}

export let helment: item = {
    type: itemType.Armor,
    name: "Mithrl helment of warding",
    value: 2450,
    rarity: rarity.artifact,
    description: "a mithirl hement with a enchentment that increses defense"
}

export let bread: item = {
    type: itemType.Consumable,
    name: "bread",
    value: 20,
    rarity: rarity.common
}