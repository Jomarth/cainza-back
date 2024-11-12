import {Router} from "express";
import {validateSchema} from "../middlewares/validator.middleware.js";
import {obraSchema} from "../schemas/obra.schemas.js";
import {createObras, deleteObra, getObra, getObras, updateObra} from "../controllers/obra.controller.js";

const router = Router();

router.post('/obras', validateSchema(obraSchema), createObras);
router.get('/obras', getObras);
router.get('/obras/:id', getObra);
router.put('/obras/:id', updateObra);
router.delete('/obras/:id', deleteObra);

export default router;