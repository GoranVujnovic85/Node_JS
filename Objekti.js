
const student = 
{
	// key  : value
	index: 332021,
	ime: 'Pera',
	prezime: 'Peric',
	ocene: 
	[
		{ predmet: 'Programiranje 1', ocena: 10 },
		{ predmet: 'Baze podataka', ocena: 10 },
		{ predmet: 'Matematika 1', ocena: 8 },
		{ predmet: 'Napredni C jezik', ocena: 6 }
	]
};

student.ocene.push( { predmet: 'Programiranje 2', ocena: 8 } );

const kljuceviObjekta = Object.getOwnPropertyNames(student);

for (let kljuc of kljuceviObjekta)
{
	let podatak = JSON.stringify(student[kljuc]);

	console.log('Naziv kljuca je ', kljuc, 'i pod tim kljucem je ', podatak);
}
