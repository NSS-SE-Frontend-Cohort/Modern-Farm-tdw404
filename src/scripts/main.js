import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./field.js"
import { createSoybean } from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"


console.log("Welcome to the main module")
 const yearlyPlan = createPlan()
addPlant(createSoybean())
addPlant(createCorn())
addPlant(createSoybean())
const field = usePlants()
console.log(field)