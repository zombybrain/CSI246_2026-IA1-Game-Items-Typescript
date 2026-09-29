export declare const enum itemType {
    Weapon = "weapon",
    Armor = "Armor",
    Consumable = "Consumable"
}
export declare const enum rarity {
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
//# sourceMappingURL=itemTypes.d.ts.map