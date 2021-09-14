const { describe } = require('yargs');

const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .check((argv, options)  => {
            if(isNaN(argv.base)){
                throw 'La base tiene que ser un numero'
            }
            return true;
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: true,
            describe: 'Muestra el encabezado en la tabla de multiplicar'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            describe: 'Numero hasta donde quieres multiplicar\nSi quieres más o menos de 10 usar el parametro:\nEjemplo:\n --h 99 --- > hasta el 99'
        })
        .argv;

        //Para poderlo usar en otro archivo por ejemplo en app.ja lo exportamos
        module.exports = argv;