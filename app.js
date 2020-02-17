const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
        .then(r => console.log(r))
        .catch(err => console.log(err));
    break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
        .then(r => console.log(r))
        .catch(err => console.log(err));
    break;
    default: console.log('Comando no reconocido');
}