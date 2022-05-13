let express = require('express');
//Inyeccion de la dependencia de express
let app = express();
//App que hace la función de servidor
let personsRoute = require('./routes/person');
//incluimos el router que viene de persons
const mongoose = require('mongoose');
//Inyectamos la dependecia de mongoose

app.set('view engine', 'ejs');
app.use(personsRoute);
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html><html lang="en"> <head><link rel="stylesheet" href="/Practica-18-Router-y-postman/public/style.css" > 
    <title>Document</title> </head> 
    <body> <h1>Hola mundo</h1></body> </html>`)
});

mongoose.connect(
`mongodb+srv://root:root@cluster0.wdwzc.mongodb.net/cluster?retryWrites=true&w=majority`,
{
useNewUrlParser: true,
useUnifiedTopology: true
}
); //Codigo de conexión a la base de datos

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
console.log("Connected successfully");
}); //Verificación de conectividad a la base de datos

let PORT = process.env.PORT || 3000;
// definición del puerto de escucha

app.listen(PORT, () => {
    console.log('escuchando en el puerto 3000');
});