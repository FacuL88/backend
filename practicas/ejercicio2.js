const fs = require('fs');

fs.promises.readFile('./info.txt', 'utf-8')
    .then(data => {
        const info = JSON.parse(data)
        console.log(info);

        const packageObj = info.contenidoObj;

        packageObj.autor = 'Facundo'

        fs.promises.writeFile('./package.json.coder', JSON.stringify(packageObj, null, 2))
        .then(() => {
            console.log('escritura exitosa');
        })
        .catch(error => {
            console.log(error);
        })
    })
    .catch(error => console.log('error en la lectura'));