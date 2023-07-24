const { Router } = require('express');
const {getUsers, createUsers, updateUsers, deleteUsers} = require('../controllers/users.controller')

const routers = Router();


routers.get('/',getUsers )
routers.post('/',createUsers )
routers.put('/:id',updateUsers )
routers.delete('/:id',deleteUsers )



module.exports = routers