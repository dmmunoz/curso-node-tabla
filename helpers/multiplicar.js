//Funcion externa para llamarla desde otro archivo
//Con un metodo async
const crearArchivo = async (base = 5, listar=false, hasta = 10) => {

        //Variable para imprimir en color USAR SIEMPRE QUE SE PUEDA CONST y sino LET
        const colors = require ('colors/safe');
        colors.enable();


        // CON UNA PROMESA ---> return new Promise( ( resolve, reject )=> {

        let resultado;
        let salida='';
        let x;
        if (listar){
            console.clear();
            console.log(colors.green('=========================='));
            console.log(colors.rainbow('====TABLA DEL NUMERO:='),base);
            console.log(colors.green('=========================='));
        } else {
            console.clear();
            console.log(colors.red('=========================='))
            console.log(colors.red('===Ha sido false LISTAR==='));
            console.log(colors.red('=========================='))
            
        }
        
        const fs = require('fs');

        for(x = 1; x<=hasta; x++){
            resultado = base * x;
            console.log (colors.rainbow(`${base} x  ${x} = ${resultado}\n`));
            salida+=(`${base} x  ${x} = ${resultado}\n`);
        }
        //Escritura de archivo normal
        /**
         fs.writeFile('tabla-un numero.txt', salida, (err)=>{
            if (err) throw err;
        console.log('The file has been saved!');
        })
         */
        
        //Escritura de archivo con sync
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        return (`tabla-${ base }.txt`); 
        }


module.exports = {
    crearArchivo
}