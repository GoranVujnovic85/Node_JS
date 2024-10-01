const o1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Mapa je uspesno ucitana!');
    }, 2000);
});

const o2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Podaci o igracu su ucitani!');
    }, 750);
});

const o3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Teksture za igru su preuzete i ucitane!');
    }, 3500);
});

o1.then(result => console.log(result));
o2.then(result => console.log(result));
o3.then(result => console.log(result));

Promise.all([ o1, o2, o3 ]).then(rezultati => {
    console.log(rezultati);
    console.log('Igra pocinje!');
});


