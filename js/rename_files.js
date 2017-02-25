// De Kafka a Kafka
// El libro que vendrá

const fs = require('fs');
const dirname = '../res';

fs.readdir(dirname, function(err, fileNames) {
    if (err) throw err;

    let index = -1;
    fileNames.forEach(function(filename) {
        index++;
        const name = `./${dirname}/${filename}`;
        const renamed = `./${dirname}/${index}.png`;
        fs.rename(name, renamed, function (err) {
            if (err) throw err;
        });
    });
});