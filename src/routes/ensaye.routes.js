import {Router} from "express";
import {validateSchema} from "../middlewares/validator.middleware.js";

import {ensayeSchema} from "../schemas/ensaye.schemas.js";
import {createEnsaye, deleteEnsaye, getEnsaye, getEnsayes, updateEnsaye} from "../controllers/ensaye.controller.js";

const router = Router();

router.post('/ensayes', validateSchema(ensayeSchema), createEnsaye);
router.get('/ensayes', getEnsayes);
router.get('/ensayes/:id', getEnsaye);
router.put('/ensayes/:id', validateSchema(ensayeSchema), updateEnsaye);
router.delete('/ensayes/:id', deleteEnsaye);


export default router;