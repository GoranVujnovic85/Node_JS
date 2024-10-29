const http = require('http');

const request = http.request({
    hostname: 'localhost',
    port: 4000,
    method: 'POST',
    path: '/checkStudentInfo/',
    headers: {
        'Content-type': 'aplication/json'
    }
}, response => {
    let parts = [];
    response.on('data', part => parts.push(part));
    response.on('end', () => {
        let responseData = Buffer.concat(parts).toString();
        console.log(responseData);

    });  
});

const studentToCheck = {
    forname: 'Goran',
    surname: 'Vujnovic',
    index: '203456919'
};

const requestBodyData = JSON.stringify(studentToCheck);

request.write(requestBodyData);

request.end();