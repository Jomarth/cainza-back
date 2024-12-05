import mongoose from "mongoose";

const numberRule = {
    type: Number,
    required: false,
};

const granulometriaModel = new mongoose.Schema({
    tres_pulgadas: numberRule,
    dos_pulgadas: numberRule,
    media_pulgada: numberRule,
    tres_cuartos_pulgada: numberRule,
    un_unmedio_pulgada: numberRule,
    tres_octavos_pulgada: numberRule,
    un_cuarto_pulgada: numberRule,
    numero_cuatro: numberRule,
    numero_diez: numberRule,
    numero_veinte: numberRule,
    numero_cuarenta: numberRule,
    numero_sesenta: numberRule,
    numero_cien: numberRule,
    numero_docientos: numberRule,
    ensaye: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ensaye",
        required: true,
    }
}, {
    timestamps: true
})

export default mongoose.model('Granulometria', granulometriaModel);
