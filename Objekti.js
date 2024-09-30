
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

console.log( JSON.stringify(student) );
