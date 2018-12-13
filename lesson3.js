function sum0(arr){
    let total = 0
    for(let i of arr){
        total+=i
    }
    return total
}

// console.log(sum0([1,2,3,4,5]))   //15

function sum1(index, arr) {
    if (index === arr.length -1) {
        return arr[index];
    }
    else { 
        return arr[index] + sum1(index + 1, arr);
    }
}

// console.log(sum1(0, [1,2,3,4,5]))   //15

function sum2(arr){
    if(arr.length === 0) return 0;
    return arr[0] + sum2(arr.slice(1));
}

console.log(sum2([1,2,3,4,5]))   //15
