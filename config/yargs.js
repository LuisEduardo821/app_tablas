require('colors');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        type: 'number',
        describe: 'base de la tabla de multiplicar',
    })
    .option('l', {
        alias: 'listar',
        default: false,
        type: 'boolean',
        describe: 'elegir si mostrar o no la tabla en consola',
    })
    .option('h', {
        alias: 'hasta',
        default: 10,
        type: 'number',
        describe: 'longitud de la tabla de multiplicar',
    })
    .check((argv, options) => {
        if (isNaN(argv.h)) {
            throw `la logitud debe ser número`.red;
        } else {
            return true;
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw `base debe ser un número`.red;
        } else {
            return true;
        }
    })
    .argv;

module.exports = argv;