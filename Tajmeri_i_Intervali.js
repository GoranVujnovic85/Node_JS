let broj = 0;

function uvecajBrojIIspisi()
{
    broj++;
    console.log(broj);
}

let intervalID = setInterval(uvecajBrojIIspisi, 5000);

setTimeout(() => 
    {
        clearInterval(intervalID);
        console.log('Prekid intervala!');

    }, 25000);