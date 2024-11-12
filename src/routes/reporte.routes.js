import {Router} from "express";
import {validateSchema} from "../middlewares/validator.middleware.js";
import {reporteSchema} from "../schemas/reporte.schemas.js";
import {
    createReporte,
    deleteReporte,
    getReporte,
    getReportes,
    updateReporte
} from "../controllers/reporte.controller.js";

const router = Router();

router.post('/reportes', validateSchema(reporteSchema), createReporte);
router.get('/reportes', getReportes);
router.get('/reportes/:id', getReporte);
router.put('/reportes/:id', validateSchema(reporteSchema), updateReporte);
router.delete('/reportes/:id', deleteReporte);


export default router;