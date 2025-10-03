const express = require('express');

//Importar versiones de rutas
const v1Routes = require('./v1');

//Rutas base para informaracion de API 
router.get ('/', (req, res) => {
    res.json({
        message: 'Workout Tracker API',
        versions: ['v1'],
        endpoints: {
            v1: '/api/v1'
        }
    });
}
);

module.exports = router;