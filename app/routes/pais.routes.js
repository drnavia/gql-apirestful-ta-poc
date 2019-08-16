const paisController = require('../controllers/pais.controller.js');

module.exports = (app) => {
    // Crear un nuevo Pais: POST
    app.post('/paises', paisController.create);

    // Recuperar todos los Paises: GET
    app.get('/paises', paisController.findAll);

    // Recuperar un solo Pais con paisId: GET
    app.get('/paises/:paisId', paisController.findOne);

    // Actualizar un Pais con paisId: PUT
    app.put('/paises/:paisId', paisController.update);

    // Borrar un Pais con paisId: DELETE
    app.delete('/paises/:paisId', paisController.delete);
};