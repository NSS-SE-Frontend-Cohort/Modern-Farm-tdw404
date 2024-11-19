import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (yearlyPlan) => {
    yearlyPlan.forEach(row => {
        row.forEach(crop => addPlant(seedPicker(crop)))
    });
}

const seedPicker = (crop) => {
    switch(crop) {
        case 'Asparagus' :
            return createAsparagus()
        case 'Corn' :
            return createCorn()
        case 'Potato' :
            return createPotato()
        case 'Soybean' :
            return createSoybean()
        case 'Sunflower' :
            return createSunflower()
        case 'Wheat' :
            return createWheat()
    }

}