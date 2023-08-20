const { Router } = require('express');
const { getUsers, createUsers, updateUsers, deleteUsers, postVerifyUser } = require('../controllers/users.controller');
const authMiddleware = require('../middleware/authMiddleware'); // Importa el middleware

const routers = Router();

// Ruta de login abierta para usuarios no autenticados
routers.post('/login', postVerifyUser);

// Aplica el middleware a las rutas protegidas
routers.get('/', authMiddleware, getUsers);
routers.post('/', createUsers);
routers.put('/:id', authMiddleware, updateUsers);
routers.delete('/:id', authMiddleware, deleteUsers);

module.exports = routers;
