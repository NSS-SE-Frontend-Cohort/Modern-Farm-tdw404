export const Catalog = (harvest) => (
    harvest.map(plant => (
        `<section class="plant">
            <div>
                <img src = "${plant.icon}">
            </div>
            <div>
                ${plant.type}
            </div>
        </section>`
    )).join('\n')
)