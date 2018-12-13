// Function that loops through array for largest number
// Function that loops through list calling ^^, removing largest from list


const itemsToSort = [3, 2, 4, 1, 6];

function findLargestValue0(list) {
    let lrg = list[0]
    let indexOfLarge = 0
    for (let i = 1; i <= list.length; i++) {
        if (lrg < list[i]) {
            lrg = list[i]
            indexOfLarge = i
        }
    }
    console.log(`lrg = ${lrg}, indexOfLarge = ${indexOfLarge}`);
}

findLargestValue0(itemsToSort);

function findLargestValue1(list) {
    if (list.length === 1) {
        return list[0];
    } else {
        let length = list.lengt;
        
        return
    }
    
    
    console.log(`lrg = ${lrg}, indexOfLarge = ${indexOfLarge}`);
}