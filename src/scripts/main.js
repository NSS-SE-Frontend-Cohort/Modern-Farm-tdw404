import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"
import { AggregateTable } from "./aggregateTable.js"
import {barn} from "./storageBarn.js"
import { randomInt } from "./randomizer.js"
import { processor, factory } from "./processingFacility.js"


console.log("Welcome to the main module")

const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
const field = usePlants()
console.log(yearlyPlan)
console.log(field)
const harvest = harvestPlants(field)
console.log(harvest)

document.getElementsByClassName('container')[0].innerHTML = Catalog(harvest)
document.getElementById('middle-col').innerHTML = AggregateTable(harvest)

console.log("Filling barn with the harvest...")
const storageBarn = barn()
harvest.forEach(crop => storageBarn.push(crop))
console.log("Storage barn filled with harvest, sending items to processing facility...")
const belt = processor()
const goods = []
while (!storageBarn.isEmpty()) {
    const nextItem = storageBarn.pop()
    //Conveyor belt only holds 3 items. Once it's full, it will process until there is only 1 item on it
    if (belt.enqueue(nextItem) == false) {
        goods.push(factory(belt.dequeue()))
        goods.push(factory(belt.dequeue()))
        belt.enqueue(nextItem)
    }
}
console.log("Storage barn is ready for new crops...")
//Continue processing crops until the belt is empty
while (!belt.isEmpty()) {
    goods.push(factory(belt.dequeue()))
}
console.log("Farm Store inventory is full and ready to open for business...")
console.log(goods)