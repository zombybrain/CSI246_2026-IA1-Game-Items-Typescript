import { sword, bluePotion, helment, bread } from "./items";
import { item, rarity, itemType } from "./itemTypes";

function printItem(item: item) {
    console.log(item.rarity + " " + item.name)
    console.log(`item type: ${item.type}, item value: ${item.value}`)
    if (item.description)
        console.log(item.description)
}

function compareItems(item1: item, item2: item) {
    if (item1.value > item2.value) {
        return item1
    }
    return item2
}

function sortItemsAsending(items: item[]): item[] {
    for (let i = 0; i < items.length - 1; i++) {
        if (items[i].value > items[i + 1].value) {
            let item = items[i]
            items[i] = items[i + 1]
            items[i + 1] = item
            if (i != 0)
                i -= 2
        }
    }
    return items
}

function sortItemsDesending(items: item[]): item[] {
    for (let i = 0; i < items.length - 1; i++) {
        if (items[i].value < items[i + 1].value) {
            let item = items[i]
            items[i] = items[i + 1]
            items[i + 1] = item
            if (i != 0)
                i -= 2
        }
    }
    return items
}

printItem(sword)
console.log()
printItem(bread)
console.log()
printItem(compareItems(helment, bluePotion))
console.log()

let items: item[] = [sword, bread, bluePotion, helment]
console.log(items)
console.log("-----------------------------------------------------------------------------------------------------")
items = sortItemsAsending(items)
console.log(items)

console.log("-----------------------------------------------------------------------------------------------------")
items = sortItemsDesending(items)
console.log(items)

