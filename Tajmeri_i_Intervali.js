function prikazPoruke(poruka)
{
    console.log('Poruka je: ' + poruka);
}

function prikazUnapredPoznatePoruke()
{
    console.log('Ovo je poznata poruka');
}

setTimeout(prikazPoruke, 5000, 'Ovo je test mehanizma');
setTimeout(prikazUnapredPoznatePoruke, 3000);

console.log('Kraj programa');