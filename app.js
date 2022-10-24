

import { guardarDB, leerDB } from './helpers/guardarFile.js';
import { inquirerMenu, 
    leerInput,  
    listadoTareasBorrar,  
    pausa,
    confirmar 
} from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js'

const main = async ()=>{
    let opt ='';
    const tareas = new Tareas();

    const tareasDB= leerDB();

    if(tareasDB){ // cargar tareas
        tareas.cargarTareasFromArray(tareasDB)
    }
    
    
    do{
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ')// se guardar el promop en una variable para luego pasarla en la funcion
                tareas.crearTarea(desc)// clase con la función
                console.log( `Tarea ${desc} Creada`)
                break;
                
                case '2'://Listar tareas
                    tareas.listadoCompleto();
                    break;

                case '3'://Listar tareas
                    tareas.listarPendientesCompletadas(true);
                    break;
                case '4'://Listar pendientes
                tareas.listarPendientesCompletadas(false);
                break;
                case '6'://Listar pendientes
                    const id = await listadoTareasBorrar(tareas.listadoArr)
                    if(id!=='0'){
                        const ok  = await confirmar('¿Esta seguro?')
                        //Preguntar si está seguro
                        if(ok){
                            tareas.borrarTarea(id);
                            console.log('Tarea Borrada');
                        }

                    }
                
                break;
                }
                
                
       guardarDB(tareas.listadoArr)
        
        
        await pausa();
       
    }while (opt!=='0') 
      
}

main();