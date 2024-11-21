export const AggregateTable = (harvest) => {
    const aggregateMap = new Map
    harvest.forEach(plant => {
        aggregateMap.has(plant.type) ?
                                    aggregateMap.set(plant.type, aggregateMap.get(plant.type) + 1)
                                    : aggregateMap.set(plant.type, 1)
    })
    return `<table>
        <tr>
            <th>Food</th>
            <th>Quantity</th>
        </tr>
        `
     + Array.from(aggregateMap).sort().map(food => {
        return `<tr>
        <td>${food[0]}</td>
        <td>${food[1]}</td>
    </tr>`}).join(`\n`) + `\n </table>`
}