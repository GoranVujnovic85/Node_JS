// Definisanje tri niza sa po pet elemenata
let prvi_niz = [23, 12, 56, 34, 7, 34, 69, 56, 89, 33];
let drugi_niz = [45, 78, 2, 89, 14, 45, 78, 99, 21, 54];
let treci_niz = [31, 65, 3, 29, 18, 1, 3, 89, 90, 44];

// Funkcija za pronalaženje najmanjeg elementa u nizu
function nadjiNajmanji(niz) {
    let najmanji = niz[0];  // Pretpostavljamo da je prvi element najmanji
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < najmanji) {
            najmanji = niz[i];  // Postavljamo trenutni element kao najmanji
        }
    }
    return najmanji;
}

// Pronalaženje najmanjih elemenata u svakom nizu
let najmanji1 = nadjiNajmanji(prvi_niz);
let najmanji2 = nadjiNajmanji(drugi_niz);
let najmanji3 = nadjiNajmanji(treci_niz);

// Sabiranje najmanjih elemenata iz sva tri niza
let sumaNajmanjih = najmanji1 + najmanji2 + najmanji3;

// Ispis rezultata
console.log("Najmanji element u nizu 1 je: " + najmanji1);
console.log("Najmanji element u nizu 2 je: " + najmanji2);
console.log("Najmanji element u nizu 3 je: " + najmanji3);
console.log("Suma najmanjih elemenata je: " + sumaNajmanjih);