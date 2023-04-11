const { Router } = require('express');
const { getComments, createComments, updateComments, deleteComments} = require('../controllers/comments.controller')

const routers = Router();


routers.get('/',getComments )
routers.post('/',createComments )
routers.put('/:id',updateComments )
routers.delete('/:id',deleteComments )



module.exports = routers