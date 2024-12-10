function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const allChairWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const betTotal = bedQuantity * perBedWood;

    const totalWood = allChairWood + tableTotalWood + betTotal;

    return totalWood;
}
const wood = woodQuantity(4, 0, 1)
console.log(wood)
