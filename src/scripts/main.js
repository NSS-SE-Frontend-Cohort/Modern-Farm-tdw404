import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"


console.log("Welcome to the main module")
const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
const field = usePlants()
console.log(yearlyPlan)
console.log(field)
const seeds = harvestPlants(field)
console.log(seeds)