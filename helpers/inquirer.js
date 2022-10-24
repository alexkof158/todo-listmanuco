import colors from 'colors';
import inquirer from 'inquirer';
 

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.red}  Crear Tarea`
            },
            {
                value: '2',
                name: `${'2'.red} Listar Tarea`
            },
            {
                value: '3',
                name: `${'3'.red}. Listar Tarea Completadas`
            },
            {
                value: '4',
                name: `${'4'.red}. Listar tareas pendientes `
            },
            {
                value: '5',
                name: `${'5'.red}. Completar Tarea Tarea`
            },
            {
                value: '6',
                name: `${'6'.red}. Borrar tarea`
            },
            {
                value: '0',
                name: `${'0'.red}. EXIT`
            },

        ]

    }

];


const inquirerMenu = async () =>{
//    console.clear();
    console.log('================================'.green)
    console.log('=====Seleccione una opción====='.yellow)
    console.log('==============================\n'.green)


    const {opcion} =await inquirer.prompt(preguntas)

    return opcion;

}




const pausa = async ()=>{

    const question=[
        {
            type:'input',
            name: 'enter',
            message: `PRESIONE ${'ENTER'.green} PARA CONTINUAR`
        }
    ]


    await inquirer.prompt(question)
}

const leerInput=async(message)=>{
    const question= [
        {
            type: 'input',
            name:'desc',
            message,
            validate( value ){
                if(value.length ===0){
                    return ' porfavor ingrese un valor'
                }
                return true;
            }
        }
    ];
    const {desc} = await inquirer.prompt(question)
    return desc;
}

const listadoTareasBorrar = async (tareas=[])=>{
   const choices  = tareas.map((tarea,i)=>{
    const idx = `${i+1}`.green
    return { 
        value: tarea.id,
        name: `${idx}. ${tarea.desc}`

    }
   })
   choices.unshift({
    value:'0',
    name: '0.'.green + 'Cancelar'
   })
   const preguntas = [
    {
        type:'list',
        name: 'id',
        message:'borrar',
        choices
    }
   ]
   const {id} =await inquirer.prompt(preguntas)

   return id
}

const confirmar = async (message)=>{
    const question= [
        {
            type:'confirm',
            name: 'ok',
            message
        }
    ]
    const {ok} =  await inquirer.prompt(question)
    return ok
}

export { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar };
