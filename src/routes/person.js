let express = require('express'); //Inyección de la dependencia
let router = express.Router(); //Instanciación del "router" al que asociaremos todas las rutas

router.get('/person', (req, res) => {
    res.send('has solicitado el listado de personas');
});

module.exports = router;
