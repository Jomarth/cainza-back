import {Router} from "express";
import {validateSchema} from "../middlewares/validator.middleware.js";
import {granulometriaSchema} from "../schemas/granulometria.schemas.js";
import {
    createGranulometria, deleteGranulometria,
    getGranulometria,
    getGranulometrias,
    updateGranulometria
} from "../controllers/granulometria.controller.js";

const router = Router();

router.post('/granulometrias', validateSchema(granulometriaSchema), createGranulometria);
router.get('/granulometrias', getGranulometrias);
router.get('/granulometrias/:id', getGranulometria);
router.put('/granulometrias/:id', validateSchema(granulometriaSchema), updateGranulometria);
router.delete('/granulometrias/:id', deleteGranulometria);


export default router;