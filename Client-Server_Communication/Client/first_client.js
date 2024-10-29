const http = require('http');

const request = http.request({
    hostname: 'localhost',
    port: 4000,
    method: 'GET',
    path: '/getRandomNumber/'
}, response => {
    let parts = [];
    response.on('data', part => parts.push(part));
    response.on('end', () => {
        let responseData = Buffer.concat(parts).toString();
        let responseDataObject = JSON.parse(responseData);
        console.log('Random number is: ', responseDataObject.randomNumber);

    });  
});

request.end();