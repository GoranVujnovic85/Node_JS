// Funkcija za Quick Sort algoritam
function quickSort(arr) {
    
    if (arr.length <= 1) {
        return arr;
    }

    const first_element = arr[0];

    // Nizovi za manje i veće elemente od prvog elementa             1, 2, 3, 4, 5, 6, 7
    let left = [];
    let right = [];

    // Poređenje elemenata sa prvim elementom
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < first_element) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Rekurzivno sortiranje levog i desnog niza, i spajanje rezultata
    return [...quickSort(left), first_element, ...quickSort(right)];
}


let arr = [3, 27, 7, 76, 4];
console.log("Ne sortirani niz:", arr);

let sortedArr = quickSort(arr);
console.log("Sortirani niz:", sortedArr);