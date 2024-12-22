function combSort(arr) {
    let n = arr.length;
    let gap = n;
    let shrink = 1.3; // Faktor smanjenja razmaka
    let sorted = false;

    while (!sorted) {
        // Smanji razmak
        gap = Math.floor(gap / shrink);

        // Ako je razmak manji od 1, postavi ga na 1
        if (gap <= 1) {
            gap = 1;
            sorted = true; // Pretpostavi da je niz sortiran
        }

        // Prolaz kroz niz sa trenutnim razmakom
        for (let i = 0; i + gap < n; i++) {
            if (arr[i] > arr[i + gap]) {
                // Ako su elementi u pogrešnom redosledu, zameni ih
                [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
                sorted = false; // Ako je bilo zamene, niz još nije sortiran
            }
        }
    }
    return arr;
}

// Primer
let arr = [8, 4, 1, 56, 3, -44, 23, -6, 28, 0];
console.log("Array before sorting: ", arr);

arr = combSort(arr);
console.log("Array after sorting: ", arr);