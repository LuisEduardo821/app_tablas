const { generarArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();



generarArchivo(argv.b, argv.l, argv.h)
    .then((nombreArchivo) => console.log(`${nombreArchivo} creado exitosamente`))
    .catch((err) => console.log(err));

