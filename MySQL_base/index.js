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

connection.query(
    /* 'SELECT * FROM category WHERE parent__category_id IS NULL;', */
    'SELECT * FROM category WHERE parent__category_id = ?;',
    [ 2 ],
    prikaziKategorije
 );

 function prikaziKategorije(error, categories, fields) {
    if (error) {
        console.log('Doslo je do greske: ', error);
        return;
    }

    for (let category of categories) {
        console.log('Ucitana kategorija: ', category.name);
    }
 }