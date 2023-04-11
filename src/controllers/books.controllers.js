const Book = require('../models/bookSchema');
const { msjP,msjPError, respApi } = require('../helpers/helpers');
const getBooks = async (req, res) => {
  try {
    msjP('Lista de libros');
    const book = await Book.find({});
    respApi(res, 'succes', book);
  } catch {
    msjPError('Error en la consulta');
  }
}

const createBooks = async (req, res) => {
  try {
    msjP('Crear libros');
    const book = await Book.create(req.body);
    respApi(res, 'success', book);
  } catch {
    msjPError('Error en la consulta');
  }
}
const updateBooks = async (req, res) => {
  try {
    msjP('Actualizar libros');
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
    respApi(res, 'success', book);
  } catch {
    msjPError('Error en la consulta');
  }
}
const deleteBooks = async (req, res) => {
  try {
    msjP('Eliminar libros');
    const book = await Book.findByIdAndDelete(req.params.id, req.body, {new: true});
    respApi(res, 'success', book);
  } catch {
    msjPError('Error en la consulta');
  }
}

module.exports = {
  getBooks,
  deleteBooks,
  updateBooks,
  createBooks
} 