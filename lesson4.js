// Function that loops through array for largest number
// Function that loops through list calling ^^, removing largest from list

{
    const itemsToSort = [3, 2, 4, 1, 6];

    function findLargestValue(list) {
        let lrg = list[0]
        let indexOfLarge = 0
        for (let i = 1; i <= list.length; i++) {
            if (lrg < list[i]) {
                lrg = list[i]
                indexOfLarge = i
            }
        }
        return indexOfLarge;
        // console.log(`lrg = ${lrg}, indexOfLarge = ${indexOfLarge}`);
    }

    function selectionSort(list) {
        let newList = []
        let lrgItem;
        while(list.length) {
          lrgItem = findLargestValue(list);
          newList.push(list[lrgItem]);
          list.splice(lrgItem, 1);
        }
        return newList;
      }

      console.log(selectionSort(itemsToSort));

}

{

    const itemsToSort = [3, 2, 6, 1, 5, 0, 1, 9, 2];
    let indexOfLarge;

    function findLargestValue(from, to, list) {
        if (list.length === 1) { 
            return {
                indexOfLarge: from,
                lrg: list[0]
            };
        } else {
            const middle = Math.floor(list.length / 2);
            const list1 = findLargestValue(from, from + middle - 1, list.slice(0, middle));
            const list2 = findLargestValue(from + middle, from + list.length - 1, list.slice(middle, list.length));
           
            if (list1.lrg >= list2.lrg) {
                indexOfLarge  = from;
                return list1;
            } else {
                indexOfLarge  = from + middle;
                return list2;
            }
        }
    }
   console.log(findLargestValue(0, itemsToSort.length - 1, itemsToSort));
}