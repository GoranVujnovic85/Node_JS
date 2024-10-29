const http = require('http');
const {resolve} = require('path');

const server = http.createServer(requestHandler);

async function requestHandler(request, response) {
    let data = {};

    if(request.method === 'GET' && request.url === '/getRandomNumber/') {
        data = sendRandomNumber();   
    } else if (request.method === 'POST' && request.url === '/checkStudentInfo/') {
        let studentInformation = await extractBodyData(request);
        data = checkStudentInformation(studentInformation);
    }

    response.writeHead(200, {
        'Content-type': 'aplication/json'
    });

    response.write(JSON.stringify(data));
    response.end();
}

function extractBodyData(request) {
    return new Promise((resolve, reject) => {
        let parts = [];
        request.on('data', part => parts.push(part));
        request.on('end', () => {
            resolve(Buffer.concat(parts).toString());
        });
    });
}

function sendRandomNumber(request, response) {
    const number = Number(Math.random() * 10000).toFixed(0);

    return {
        randomNumber: number
    };
}

function checkStudentInformation(studentInformation) {
    const student = JSON.parse(studentInformation);

    if ( student.forename.lenght < 2 ) {
        return {
            status: false,
            reason: 'Forename'
        };
    }

    if ( student.surname.lenght < 2 ) {
        return {
            status: false,
            reason: 'Surname'
        };
    }

    if ( student.index.lenght != 10 ) {
        return {
            status: false,
            reason: 'Index'
        };
    }

    return {
        status: true
    };
}

server.listen(4000);
