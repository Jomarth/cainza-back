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

const reporteModel = new mongoose.Schema({
    fecha_reporte: stringRule,
    destinatario: stringRule,
    no_ensayes:numberRule,
    lugar: stringRule,
    objetivo: stringRule,
    observacion: stringRule,
    obra: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Obra",
        required: true,
    }
}, {
    timestamps: true
})

export default mongoose.model('Reporte', reporteModel);
