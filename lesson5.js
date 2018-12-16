// D&C algorithm that uses recursion 
// less than array
// pivot
// greater than array

{
    function quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        else {
            const pivotIndex = Math.floor(arr.length / 2);
            const pivot = arr[pivotIndex];
            const smallArr = [];
            const bigArr = [];
            arr.forEach((element, index) => {
                if (index !== pivotIndex)
                    if (element <= pivot) {
                        smallArr.push(element);
                    } else {
                        bigArr.push(element);
                    }
            });
            return [...quickSort(smallArr), pivot, ...quickSort(bigArr)];
        }
    }

    console.log(quickSort([3, 5, 2, 4, 9, 0, 3]));
}

{
    function quickSort(array) {
        console.log('here')
        if (array.length < 2) return array
        let pivotIndex = Math.floor(array.length / 2)
        //  let pivotIndex = array.length - 1
        //  let pivotIndex = 0
        let pivot = array[pivotIndex]
        console.log(pivot)
        let less = []
        let greater = []
        for (let i in array) {
          if (i != pivotIndex) {
            array[i] > pivot ? greater.push(array[i]) : less.push(array[i])
          }
        }
        return [
          ...quickSort(less),
          pivot,
          ...quickSort(greater)
        ]
      }
}