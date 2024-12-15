export const processor = () => {
    //Belt holds at most 3 objects
    const beltQueue = [null, null, null]
    //Pointer at -1 will indicate that the belt is empty
    var pointer = -1
    return {
        enqueue: (crop) => {
            if (pointer < 2) {
                pointer += 1
                beltQueue[pointer] = crop
                return true
            } else {
                return false
            }
        },
        dequeue: () => {
            
            if (beltQueue[0] == null) {
                return null
            } else {
                const result = beltQueue[0]
                beltQueue[0] = beltQueue[1]
                beltQueue[1] = beltQueue[2]
                beltQueue[2] = null
                pointer -= 1
                return result
            }
        },
        next: () => {
            return beltQueue[0]
        },
        last: () => {
            return beltQueue[pointer]
        },
        isEmpty: () => {
            return pointer == -1
        },
        size: () => {
            return pointer
        }
    }
}

export const factory = (crop) => {

    switch(crop.type) {
        case 'Asparagus' :
            return 'Pickled asparagus'
        case 'Corn' :
            return 'Corn meal'
        case 'Potato' :
            return 'Potato chips'
        case 'Soybean' :
            return 'Bean paste'
        case 'Sunflower' :
            return 'Sunflower oil'
        case 'Wheat' :
            return 'Flour'
    }
}