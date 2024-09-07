import {
  queryAll,
  queryFind,
  queryCreate,
  queryUpdate,
  queryDelete
} from "../../db/articulos/articulosQueries.js";

/**
 * Obtener todos los articulos de la base de datos
 */
const allController = async (req, res) => {
  // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
  // Try -> intentar
  // Catch -> capturar el error
  try {
    //  Ejecutar la consulta en la base de datos
    const articulos = await queryAll();
    res.json(articulos);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Obtener el articulo con el ID especificado en la query / url
 * @param {*} req 
 * @param {*} res 
 */

const findController = async (req, res) => { 
  try {
    //  Ejecutar la consulta en la base de datos
    const articulo = await queryFind(req.params.id);
    res.json(articulo);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Crear un articulo
 */
const createController = async (req, res) => {
  try {
      const datosarticulo = req.body;
      const resultado = await queryCreate(datosarticulo);
      res.json({ mensaje: 'articulo creado con éxito', id: resultado.insertId });
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Actualizar los datos de un articulo
 */
const updateController = async (req, res) => {
  try {
      const id = req.params.id;
      const datosarticulo = req.body;
      const resultado = await queryUpdate(id, datosarticulo);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'articulo actualizada con éxito', articulo: resultado });
      } else {
          res.status(404).json({ mensaje: 'articulo no encontrada' });
      }
  } catch (error) {
      res.status(500).send(error);
  }
};

/**
 * Eliminar un articulo
 */
const deleteController = async (req, res) => {
  try {
      const id = req.params.id;
      const resultado = await queryDelete(id);
      if (resultado.affectedRows > 0) {
          res.json({ mensaje: 'articulo eliminada con éxito' });
      } else {
          res.status(404).json({ mensaje: 'articulo no encontrado' });
      }
  } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar la articulo', error: error.message });
  }
};

export {
  allController,
  findController,
  createController,
  updateController,
  deleteController
};
