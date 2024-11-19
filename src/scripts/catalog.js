export const Catalog = (harvest) => (
    harvest.map(plant => (
        `<section class="plant">${plant.type}</section>`
    )).join('\n')
)