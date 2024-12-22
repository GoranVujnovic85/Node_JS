function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Pronađi minimalni element u nesortiranom delu niza
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Zameni najmanji pronađeni element sa prvim elementom nesortiranog dela
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Primer: Sortiranje niza od 5 brojeva
let numbers = [64, 25, 12, 22, 11];
console.log("Sortiran niz: ", selectionSort(numbers));