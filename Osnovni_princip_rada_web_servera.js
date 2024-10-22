const http = require('http');

const server = http.createServer(requestHandler);

function requestHandler(request, response) {
    const podaciOdKlijenta = {
        method: request.method,
        link: request.url
    };

    // Preimenuj varijablu kako ne bi došlo do sukoba imena
    const podaciKaoString = JSON.stringify(podaciOdKlijenta);

    response.writeHead(200, {
        'Content-type': 'application/json; charset=utf-8'
    });

    response.write(podaciKaoString);
    response.end();
}

// Pokreni server na portu 3000
server.listen(3000, () => {
    console.log('Server je pokrenut na http://localhost:3000');
});