import Granulometria from "../models/granulometria.models.js";

export const createGranulometria = async (req, res) => {
    try {
        const newGranulometria = new Granulometria(req.body);
        const granulometriaSaved = await newGranulometria.save(newGranulometria);

        res.send(granulometriaSaved);    // y regresamos la respuesta de mongodb
    } catch (e) {
        res.status(500).send({message: ['Error al crear el granulometria']});
    }
}

export const getGranulometrias = async (req, res) => {
    try {
        const granulometria = await Granulometria.find().populate('ensaye');
        res.status(200).json(granulometria);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: ['Error al obtener los granulometrias']});
    }
}

export const getGranulometria = async (req, res) => {
    try {
        const granulometria =
            await Granulometria.findById(req.params.id).populate('ensaye');
        if (!granulometria)
            return res.status(404).json({message: ["Granulometria no encontrado"]});
        res.json(granulometria);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: ['Error al obtener el granulometria']});
    }
};

export const updateGranulometria = async (req, res) => {
    try {
        const granulometria = await Granulometria.findByIdAndUpdate(req.params.id, req.body);
        if (!granulometria)
            return res.status(404).json({message: ["Granulometria no encontrado"]});
        res.json(granulometria);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: ['Error al actualizar el granulometria']});
    }
};


export const deleteGranulometria = async (req, res) => {
    try {
        const granulometria = await Granulometria.findByIdAndDelete(req.params.id);
        if (!granulometria)
            return res.status(404).json({message: ["Granulometria no encontrada"]});
        res.json(granulometria);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: ['Error eliminar el granulometria']});
    }
};