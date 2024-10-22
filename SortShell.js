/* An utility function to print array of size n*/
function printArray(arr)
{
    let n = arr.length;
        for (let i = 0; i < n; ++i) {
            console.log(arr[i] + " ");
    }
    console.log("\n");
}

/* function to sort arr using shellSort */
function sort(arr)
{
    let n = arr.length;
 
        // Start with a big gap, then reduce the gap
        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
        {
        
            // Do a gapped insertion sort for this gap size.
            // The first gap elements a[0..gap-1] are already
            // in gapped order keep adding one more element
            // until the entire array is gap sorted
            for (let i = gap; i < n; i += 1)
            {
            
                // add a[i] to the elements that have been gap
                // sorted save a[i] in temp and make a hole at
                // position i
                let temp = arr[i];
 
                // shift earlier gap-sorted elements up until
                // the correct location for a[i] is found
                let j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                    arr[j] = arr[j - gap];
 
                // put temp (the original a[i]) in its correct
                // location
                arr[j] = temp;
            }
        }
        return arr;
}

// Driver method
let arr = [12, 34, 54, 2, 3];
console.log("Sortiran niz: ", arr);

arr = sort(arr);
console.log("Sortiran niz: ", arr);