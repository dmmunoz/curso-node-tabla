//Importamos Yargs que sierve entre otras cosas para poder poner parametros
// de entrada en consola para en este caso particular poner la base de 
// la tabla de multiplicar 

const argv = require('./config/yargs');

/**
 * App que hace la tabla de multimplicar de la base que hayamos puesto 
 * pero antes si ejectuamos por terminal hace un clear de lo que haya
 * limpia lo que tengamos en consola con la primera funcion
 * Esta aplicacion se grabará en fichero del sistema
 */
try{
    
    const { crearArchivo } = require ('./helpers/multiplicar');
    
    //coger argumentos desde la consola por posicion
    //const [ , , argumento3 = 'base=5'] = process.argv;
    //const [ , base = 5 ]= argumento3.split('=');
    
    let base = argv.base;
    let hasta =argv.hasta;
    let lista = argv.listar;
    crearArchivo(base, lista, hasta)
        .then (nombreArchivo => console.log (nombreArchivo, 'creado'))
        .catch(err => console.log(err));

}catch(err){
    throw err
}


