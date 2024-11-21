import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"
import { AggregateTable } from "./aggregateTable.js"


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
