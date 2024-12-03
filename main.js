// para crear el texto en movimiento
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Todo lo que es o fue...')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Comenzó como un sueño!</strong>')
    .pauseFor(2500)
    .start();