function binarySearch(array, I_am_looking_for) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        //let middle = Math.floor((left + right) / 2);
        let middle = (left + right) >> 1; 
        if (array[middle] === I_am_looking_for) {
            return middle;  // Pronađen element, vraća indeks
        } else if (array[middle] < I_am_looking_for) {
            left = middle + 1;  // Pretražuje desnu polovinu
        } else {
            right = middle - 1;  // Pretražuje levu polovinu
        }
    }

    return -1;  // Element nije pronađen
}

// Primer korišćenja:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const I_am_looking_for = 7;
const result = binarySearch(sortedArray, I_am_looking_for);

if (result !== -1) {
    console.log(`Element pronađen na indeksu: ` + result);
} else {
    console.log("Element nije pronađen.");
}