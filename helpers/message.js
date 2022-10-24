

require ('colors');


const mostrarMenu=  ()=>{
    return new Promise(resolve=>{
        console.clear()

        console.log('---Lista de Tareas---'.green)
        console.log('---Hola Manuel---')
        console.log('---Seleccione una opción:---\n'.green)

        console.log(`1.Tarea`);
        console.log(`2. Listar Tarea`);
        console.log(`3.Listas Tarea completadas`);
        console.log(`4.Listar tareas pendientes`);
        console.log(`5.Completar Tarea`);
        console.log(`6.Borrar Tarea`);
        console.log(`0.Salir\n`);


        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Seleccione una opción: ',(opt)=>{
            readLine.close();
            resolve(opt)
        })
        })

    


}

const pausa = ()=>{

    return new Promise(resolve=>{
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`PRESIONE ${'ENTER'.green} para continuar`,(opt)=>{
            readLine.close();
            resolve();
        })

    })

}




 export  {
    mostrarMenu,
    pausa
}


