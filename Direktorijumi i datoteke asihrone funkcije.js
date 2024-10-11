const fs = require('fs');

fs.mkdir('data/samples/', { recursive: true }, err => {
    if (err) {
        console.log('Nije moguce napraviti strukturu direktorijum!');
        return;
    }

    fs.writeFile('data/samples/semple.dat', 'Neki tekst!', err => {
        if (err) {
            console.log('Nije moguce napraviti datoteku i upisati sadrzaj!');
            return;
        }

        fs.readdir('data/samples/', (err, files) => {
            if (err) {
                console.log('Nije moguce procitati spisak datoteka!');
                return;
            }

            for (let file of files) {
                let filePath = 'data/samples/' + file;

                fs.readFile(filePath, 'utf-8', (err, data) => {
                    if (err) {
                        console.log('Greska pri citanju datoteke: ', filePath);
                        return;
                    }

                    console.log('Sadrzaj datoteke: ', filePath, data);
                });
            }

        });
    });

});