function izracunajPodatak(racun)
{
    racun.stavka3 = racun.stavka1 + racun.stavka2;
}

const r =
{
    stavka1: 400,
    stavka2: 300,
    stavka3: null
};

console.log(r);

izracunajPodatak(r);

console.log(r);
