var fs = require('fs');

const filepath = process.argv[2]

function writeFile(path, data) {
    fs.writeFile(path, data, function (err) {
        if (err) {
            throw err;
        }
    });
}

writeFile(filepath, '')