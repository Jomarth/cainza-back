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

const obraSchema = new mongoose.Schema({
    nombre: stringRule,
    dependencia: stringRule,
    contratista: stringRule,
    estado: stringRule,
    importe: numberRule,
    tramo: stringRule,
    fecha_inicio: stringRule,
    fecha_fin: stringRule
}, {
    timestamps: true
})

export default mongoose.model('Obra', obraSchema);