const harvest = []

export const harvestPlants = (field) => {
    field.forEach(plant => seedYield(plant))
    return harvest
}

const seedYield = (plant) => {
    switch(plant.type) {
        case 'Corn' :
            for (let i = 0; i < plant.output/2; i ++) {
                harvest.push(plant)
            }
            break
        default:
            for (let i = 0; i < plant.output; i ++) {
                harvest.push(plant)
            }
    }
}