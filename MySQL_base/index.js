// (Ctrl) + (~)
// npm -v
//npm init
// npm i mysql2

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'aplikacija',
    password: 'aplikacija',
    database: 'aplikacija'
});

connection.promise()
.query('SELECT * FROM category WHERE parent__category_id = ?;', [2])
.then(prikaziKategorije)
.catch(error => {
    console.log('Doslo je do greske: ', error);
})

function prikaziKategorije( [ categories, fields ] ) {
    for (let category of categories) {
        console.log('Ucitana kategorija: ', category.name);
    }
}