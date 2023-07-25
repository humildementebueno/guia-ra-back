const User = require('../models/userSchema');
const { msjP,msjPError, respApi } = require('../helpers/helpers');
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
    msjP('Crear libros');
    const user = await User.create(req.body);
    respApi(res, 'success', user);
  } catch {
    msjPError('Error en la consulta');
  }
}
const updateUsers = async (req, res) => {
  try {
    msjP('Actualizar libros');
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    respApi(res, 'success', user);
  } catch {
    msjPError('Error en la consulta');
  }
}
const deleteUsers = async (req, res) => {
  try {
    msjP('Eliminar libros');
    const user = await User.findByIdAndDelete(req.params.id, req.body, {new: true});
    respApi(res, 'success', user);
  } catch {
    msjPError('Error en la consulta');
  }
}

module.exports = {
  getUsers,
  deleteUsers,
  updateUsers,
  createUsers
} 