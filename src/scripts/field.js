const field = []
export const addPlant = (seed) => {
    Array.isArray(seed) ?
                seed.forEach(seedling => {
                    field.push(seedling)
                }) :
                field.push(seed)
}

export const usePlants = () => (field)