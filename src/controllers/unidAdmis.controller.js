const Comment = require('../models/unidAdmisSchema');
const { msjP,msjPError, respApi } = require('../helpers/helpers');
const getUnidAdmis = async (req, res) => {
  try {
    msjP('Lista de comentarios');
    const comment = await Comment.find({});
    respApi(res, 'succes', comment);
  } catch {
    msjPError('Error en la consulta');
  }
}

const createUnidAdmis = async (req, res) => {
  try {
    msjP('Crear comentarios');
    const comment = await Comment.create(req.body);
    respApi(res, 'success', comment);
  } catch {
    msjPError('Error en la consulta');
  }
}
const updateUnidAdmis = async (req, res) => {
  try {
    msjP('Actualizar comentarios');
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true});
    respApi(res, 'success', comment);
  } catch {
    msjPError('Error en la consulta');
  }
}
const deleteUnidAdmis = async (req, res) => {
  try {
    msjP('Eliminar comentarios');
    const comment = await Comment.findByIdAndDelete(req.params.id, req.body, {new: true});
    respApi(res, 'success', comment);
  } catch {
    msjPError('Error en la consulta');
  }
}

module.exports = {
  getUnidAdmis,
  deleteUnidAdmis,
  updateUnidAdmis,
  createUnidAdmis
} 