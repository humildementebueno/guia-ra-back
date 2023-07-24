const { Router } = require('express');
const { getUnidAdmis, createUnidAdmis, updateUnidAdmis, deleteUnidAdmis} = require('../controllers/unidAdmis.controller')

const routers = Router();


routers.get('/',getUnidAdmis )
routers.post('/',createUnidAdmis )
routers.put('/:id',updateUnidAdmis )
routers.delete('/:id',deleteUnidAdmis )



module.exports = routers