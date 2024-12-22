function linearSearch(arrey, number) {
    for (let i = 0; i < arrey.length; i++) {
        if (arrey[i] === number) {
            return i; // vraća indeks pronađenog elementa
        }
    }
    return -1; // vraća -1 ako element nije pronađen
}

// Primer korišćenja:
const arrey = [10, 25, 30, 40, 55];
const number = 30;
const result = linearSearch(arrey, number);

if (result !== -1) {
    console.log(`Element je pronađen na indeksu ${result}.`);
} else {
    console.log("Element nije pronađen.");
}