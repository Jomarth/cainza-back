import Ensaye from "../models/ensaye.models.js";

export const createEnsaye = async (req, res) => {
    try {
        const newEnsaye = new Ensaye(req.body);
        const ensayeSaved = await newEnsaye.save(newEnsaye);

        res.send(ensayeSaved);    // y regresamos la respuesta de mongodb
    } catch (e) {
        res.status(500).send({message: ['Error al crear el ensaye']});
    }
}

export const getEnsayes = async (req, res) => {
    try {
        const ensaye = await Ensaye.find().populate('reporte');
        res.status(200).json(ensaye);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: ['Error al obtener los ensayes']});
    }
}

export const getEnsaye = async (req, res) => {
    try {
        const ensaye =
            await Ensaye.findById(req.params.id).populate('reporte');
        if (!ensaye)
            return res.status(404).json({message: ["Ensaye no encontrado"]});
        res.json(ensaye);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: ['Error al obtener el ensaye']});
    }
};

export const updateEnsaye = async (req, res) => {
    try {
        const ensaye = await Ensaye.findByIdAndUpdate(req.params.id, req.body);
        if (!ensaye)
            return res.status(404).json({message: ["Ensaye no encontrado"]});
        res.json(ensaye);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: ['Error al actualizar el ensaye']});
    }
};


export const deleteEnsaye = async (req, res) => {
    try {
        const ensaye = await Ensaye.findByIdAndDelete(req.params.id);
        if (!ensaye)
            return res.status(404).json({message: ["Ensaye no encontrada"]});
        res.json(ensaye);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: ['Error eliminar el ensaye']});
    }
};