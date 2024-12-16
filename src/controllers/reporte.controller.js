import Reporte from "../models/reporte.models.js";

export const createReporte = async (req, res) => {
    try {
        const newReporte = new Reporte(req.body);
        const reporteSaved = await newReporte.save(newReporte);

        res.send(reporteSaved);    // y regresamos la respuesta de mongodb
    } catch (e) {
        res.status(500).send({message: ['Error al crear el reporte']});
    }
}

export const getReportes = async (req, res) => {
    try {
        const reportes = await Reporte.find().populate('obra');
        res.status(200).json(reportes);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: ['Error al obtener los reportes']});
    }
}

export const getReporte = async (req, res) => {
    try {
        const reporte =
            await Reporte.findById(req.params.id).populate('obra');
        if (!reporte)
            return res.status(404).json({message: ["Reporte no encontrado"]});
        res.json(reporte);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: ['Error al obtener el reporte']});
    }
};

export const updateReporte = async (req, res) => {
    try {
        const reporte = await Reporte.findByIdAndUpdate(req.params.id, req.body);
        if (!reporte)
            return res.status(404).json({message: ["Reporte no encontrado"]});
        res.json(reporte);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: ['Error al actualizar el reporte']});
    }
};


export const deleteReporte = async (req, res) => {
    try {
        const reporte = await Reporte.findByIdAndDelete(req.params.id);
        if (!reporte)
            return res.status(404).json({message: ["Reporte no encontrada"]});
        res.json(reporte);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: ['Error eliminar el reporte']});
    }
};