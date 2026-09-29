"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items_1 = require("./items");
function printItem(item) {
    console.log(item.rarity + " " + item.name);
    console.log(`item type: ${item.type}, item value: ${item.value}`);
    if (item.description)
        console.log(item.description);
}
function compareItems(item1, item2) {
    if (item1.value > item2.value) {
        return item1;
    }
    return item2;
}
function sortItemsAsending(items) {
    for (let i = 0; i < items.length - 1; i++) {
        if (items[i].value > items[i + 1].value) {
            let item = items[i];
            items[i] = items[i + 1];
            items[i + 1] = item;
            if (i != 0)
                i -= 2;
        }
    }
    return items;
}
function sortItemsDesending(items) {
    for (let i = 0; i < items.length - 1; i++) {
        if (items[i].value < items[i + 1].value) {
            let item = items[i];
            items[i] = items[i + 1];
            items[i + 1] = item;
            if (i != 0)
                i -= 2;
        }
    }
    return items;
}
printItem(items_1.sword);
console.log();
printItem(items_1.bread);
console.log();
printItem(compareItems(items_1.helment, items_1.bluePotion));
console.log();
let items = [items_1.sword, items_1.bread, items_1.bluePotion, items_1.helment];
console.log(items);
console.log("-----------------------------------------------------------------------------------------------------");
items = sortItemsAsending(items);
console.log(items);
console.log("-----------------------------------------------------------------------------------------------------");
items = sortItemsDesending(items);
console.log(items);
//# sourceMappingURL=main.js.map