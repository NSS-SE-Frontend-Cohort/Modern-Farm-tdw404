import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"


console.log("Welcome to the main module")
const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
const field = usePlants()
console.log(yearlyPlan)
console.log(field)