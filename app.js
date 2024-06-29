export function countSheeps(list) {
    const sheepCount = list.filter(Boolean).length;
    return sheepCount > 0 ? `There are ${sheepCount} sheep in total` : "UPS!!! Wolfs eaten Sheeps";
}
