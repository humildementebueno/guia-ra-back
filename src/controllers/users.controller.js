const User = require('../models/userSchema');
const { msjP, msjPError, respApi } = require('../helpers/helpers');
const jwt = require('jsonwebtoken');

const getUsers = async (req, res) => {
  try {
    msjP('Lista de usuarios');
    const user = await User.find({});
    respApi(res, 'succes', user);
  } catch {
    msjPError('Error en la consulta del get');
  }
}

const createUsers = async (req, res) => {
  try {
    msjP('Crear usuarios');
    const user = await User.create(req.body);
    respApi(res, 'success', user);
  } catch {
    msjPError('Error en la consulta');
  }
}
const updateUsers = async (req, res) => {
  try {
    msjP('Actualizar usuarios');
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    respApi(res, 'success', user);
  } catch {
    msjPError('Error en la consulta');
  }
}
const deleteUsers = async (req, res) => {
  try {
    msjP('Eliminar usuario');
    const user = await User.findByIdAndDelete(req.params.id, req.body, { new: true });
    respApi(res, 'success', user);
  } catch {
    msjPError('Error en la consulta');
  }
}

const postVerifyUser = async (req, res) => {
  try {
    msjP('Verificando usuario');
    const user = await User.findOne(req.body);

    if (user) {
      console.log("Usuario encontrado:", user);
      // Genera el token JWT
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      // Envía la respuesta con el token
      respApi(res, 'success', { token }); // Aquí utilizamos respApi
    } else {
      console.log("Usuario no encontrado");
      respApi(res, 'error', null); // Aquí utilizamos respApi
    }
  } catch {
    msjPError('Error en la consulta de verificacion');
    respApi(res, 'error', {}); // Aquí utilizamos respApi
  }
}


module.exports = {
  getUsers,
  deleteUsers,
  updateUsers,
  createUsers,
  postVerifyUser
} 