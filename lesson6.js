const items = [1, 5, 2, 7, 3, 12, 6, 10]
items.sort((a, b) => a - b);

console.log(items);

{
    const items = [1, 5, 2, 7, 3, 12, 6, 10];

    // O(n)
    // Once for each element in the array

    function search(list, item) {
        let hasItem = null;
        let counter = 0;

        for (let e of list) {
            counter++;
            if (e === item) {
                hasItem = true;
                break
            }
        }
        console.log('counter0', counter);
        return hasItem;
    }

    console.log(search(items, 12));
}

{
    const items = [1, 5, 2, 7, 3, 12, 6, 10];

    // O(n)
    // Once for each element in the array

    items.sort((a, b) => a - b);
    console.log(items);

    function search(list, item) {
        let low = 0
        let high = list.length
        let counter = 0
      
      while(low <= high) {
        counter++
        let mid = Math.floor((low + high) / 2)
        let guess = list[mid]
        if(guess === item) return true
        if(guess > item) high = mid - 1
        else low = mid + 1 
      }
        console.log('counter1', counter);
        return null;
      }

    console.log('search1', search(items, 12));
}