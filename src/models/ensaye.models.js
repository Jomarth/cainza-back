import mongoose from "mongoose";

const stringRule = {
    type: String,
    required: true,
    trim: true
};
const numberRule = {
    type: Number,
    required: true,
};

const ensayeModel = new mongoose.Schema({
    solicitante: stringRule,//
    norma: stringRule,//
    fecha_muestreo: stringRule,//
    localizacion: stringRule,//
    ubicacion_muestra: stringRule,//
    tipo_material: stringRule,//
    fecha_entrega: stringRule,
    capa: stringRule,//
    masa_muestra: stringRule,//
    peso_volumetrico: numberRule,//
    masa_alterada: numberRule,//
    tipo_granulometria: numberRule,
    volumen_tara: numberRule,
    desperdicio: stringRule,
    profundidad: numberRule,
    reporte: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reporte",
        required: true,
    }
}, {
    timestamps: true
})


export default mongoose.model('Ensaye', ensayeModel);

