const seeds = []

export const harvestPlants = (field) => {
    field.forEach(plant => seedYield(plant))
    return seeds
}

const seedYield = (plant) => {
    switch(plant.type) {
        case 'Corn' :
            for (let i = 0; i < plant.output/2; i ++) {
                seeds.push(plant)
            }
            break
        default:
            for (let i = 0; i < plant.output; i ++) {
                seeds.push(plant)
            }
    }
}