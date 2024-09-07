import { Router } from 'express';
// import verifyToken from '../middleware.js';
import {
    allController,
  findController,
  createController,
  updateController,
  deleteController
} from '../../controllers/articulos/articulosController.js';

const articulosRouter = Router();

//Proteger todas las rutas de este archivo
// POR EL MOMENTO SE COMENTA PARA PODER PROBAR LAS RUTAS SIN NECESIDAD DE UN TOKEN
//notasRouter.use(verifyToken);

// Rutas para la entidad de notas
articulosRouter.get('/', allController);
articulosRouter.get('/:id', findController);
articulosRouter.post('/', createController);
articulosRouter.put('/:id', updateController);
articulosRouter.delete('/:id', deleteController);

export default articulosRouter;
