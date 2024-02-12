const fs = require('fs');


const generarArchivo = async (base = 0, listar = false, hasta = 10) => {

    try {


        let salida = '';
        let consola = '';

        for (let i = 0; i <= hasta; i++) {
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        fs.writeFileSync(`salida/tabla_del_${base}.txt`, salida);

        if (listar) {
            console.log('=========================='.green);
            console.log(`     Tabla del ${base} `.green);
            console.log('=========================='.green);
            console.log(consola);
        }

        return `tabla_del_${base}.txt`;
    } catch (err) {
        throw err;
    }
}
module.exports = {
    generarArchivo,
}