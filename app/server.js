// Importar Express
const express = require('express');
// Para crear aplicación con Express
const app = express();

// Importar body-parser
const bodyParser = require('body-parser');
// Para analizar el texto como JSON y expone el objeto resultante en req.body
app.use(bodyParser.json());
// Para analiza el texto como datos codificados en URL y expone el objeto resultante en req.body.
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar la base de datos
const db = require('../data/db.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Conectando la base de datos
mongoose.connect(db.url, {
	useNewUrlParser: true
	}).then(() => {
		console.log("CONECTADO EXITOSAMENTE A LA BASE DE DATOS");    
	}).catch(err => {
		console.log('NO SE PUDO CONECTAR A LA BASE DE DATOS. Saliendo ahora...', err);
		process.exit();
});

// Definir el mensaje de la ruta principal
app.get('/', (req, res) => {
    res.send('<h2>API REST <a href="http://localhost:3001/paises"><b>/paises</b></a></h2><p>La API se encuentra corriendo desde <a href="http://localhost:3001/paises"><b>http://localhost:3001/paises</b></a></p><h3>Países, Estados y Localidades</h3>');
});


require('./routes/pais.routes.js')(app);

// Para arrancar el servidor
app.listen({port: 3001}, () => console.log(`>>> El servidor esta corriendo desde http://localhost:3001 <<<`));
