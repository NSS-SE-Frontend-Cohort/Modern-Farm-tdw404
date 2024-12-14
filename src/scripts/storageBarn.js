export const barn = () => {
    const storage = []
    return {
        push: (crop) => {
            storage.push(crop)
        },
        pop: () => {
            return storage.length > 0 ?
            storage.pop() :
            null
        },
        peek: () => {
            return storage.length > 0 ?
            storage[storage.length - 1] :
            null
        },
        isEmpty: () => {
            return !(storage.length > 0)
        }
    }
}