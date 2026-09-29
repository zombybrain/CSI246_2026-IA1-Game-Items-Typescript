

export const enum itemType {
    Weapon = "weapon",
    Armor = "Armor",
    Consumable = "Consumable"
}

export const enum rarity {
    common = "common",
    uncommon = "uncommon",
    rare = "rare",
    legendary = "legendary",
    artifact = "artifact"
}

export interface item {
    name: string;
    type: itemType;
    value: number;
    rarity: rarity;
    description?: string;
}

let sword: item = {
    type: itemType.Weapon,
    name: "steel sword",
    value: 140,
    rarity: rarity.common,
    description: "basic sword made of steel"
}