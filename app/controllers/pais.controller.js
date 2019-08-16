const Pais = require('../models/pais.model.js');

// Crear y Guardar un nuevo Pais
exports.create = (req, res) => {
    // Validar el request
    if(!req.body.nombpais) {
        return res.status(400).send({
        message: "El nombre del pais no debe estar vacio!"
        });
    }

    // Crear un Pais
    const pais = new Pais({
        codpais:       req.body.codpais || "Sin codigo de pais", 
        nombpais:      req.body.nombpais,
        prefpais:      req.body.prefpais,
        continente:    req.body.continente,
        estados:       req.body.estados,
        codestado:     req.body.codestado,
        nombestado:    req.body.nombestado,
        localidades:   req.body.localidades,
        codlocalidad:  req.body.codlocalidad,
        nomblocalidad: req.body.nomblocalidad
    });

    // Guardar el Pais en la base de datos
    pais.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algun error ocurrio mientras se creaba el registro."
        });
    });
};

// Recuperar y devolver todos los Paises de la base de datos
exports.findAll = (req, res) => {
    Pais.find()
    .then(paises => {
        res.send(paises);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Se produjo algún error al recuperar los Paises."
        });
    });
};

// Buscar un solo Pais con un paisId
exports.findOne = (req, res) => {
    Pais.findById(req.params.paisId)
    .then(pais => {
        if(!pais) {
            return res.status(404).send({
                message: "Pais no encontrado con el id " + req.params.paisId
            });            
        }
        res.send(pais);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Pais no encontrado con el id " + req.params.paisId
            });                
        }
        return res.status(500).send({
            message: "Error al recuperar el pais con el id " + req.params.paisId
        });
    });
};

// Actualizar un Pais identificado por el paisId
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.nombpais) {
        return res.status(400).send({
            message: "El nombre del pais no debe estar vacio!"
        });
    }

    // Buscar un Pais y actualízar con el req.body
    Pais.findByIdAndUpdate(req.params.paisId, {
        codpais:       req.body.codpais || "Sin codigo de pais", 
        nombpais:      req.body.nombpais,
        prefpais:      req.body.prefpais,
        continente:    req.body.continente,
        estados:       req.body.estados,
        codestado:     req.body.codestado,
        nombestado:    req.body.nombestado,
        localidades:   req.body.localidades,
        codlocalidad:  req.body.codlocalidad,
        nomblocalidad: req.body.nomblocalidad
    }, {new: true})
    .then(pais => {
        if(!pais) {
            return res.status(404).send({
                message: "Pais no encontrado con el id " + req.params.paisId
            });
        }
        res.send(pais);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Pais no encontrado con el id " + req.params.paisId
            });                
        }
        return res.status(500).send({
            message: "Error al actualizar el pais con el id " + req.params.paisId
        });
    });
};

// Eliminar una Pais con el paisId especificado en el request
exports.delete = (req, res) => {
    Pais.findByIdAndRemove(req.params.paisId)
    .then(pais => {
        if(!pais) {
            return res.status(404).send({
                message: "Pais no encontrado con el id " + req.params.paisId
            });
        }
        res.send({message: "Pais borrado exitosamente!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Pais no encontrado con el id " + req.params.paisId
            });                
        }
        return res.status(500).send({
            message: "No se pudo borrar el pais con el id " + req.params.paisId
        });
    });
};