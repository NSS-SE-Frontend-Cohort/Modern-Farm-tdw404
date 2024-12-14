import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"
import { AggregateTable } from "./aggregateTable.js"
import {barn} from "./storageBarn.js"
import { randomInt } from "./randomizer.js"


console.log("Welcome to the main module")

const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
const field = usePlants()
console.log(yearlyPlan)
console.log(field)
const harvest = harvestPlants(field)
console.log(harvest)
//Fill up the barn with the harvest:
const storageBarn = barn()
harvest.forEach(crop => storageBarn.push(crop))
//Empty the barn, peek randomly
console.log("Random inspecting items from the barn:")

while (!storageBarn.isEmpty()) {
    if (randomInt(1,10) < 4) {
        console.log(storageBarn.peek())
        storageBarn.pop()
    } else {
        storageBarn.pop()
    }
}
document.getElementsByClassName('container')[0].innerHTML = Catalog(harvest)
document.getElementById('middle-col').innerHTML = AggregateTable(harvest)