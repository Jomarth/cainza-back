import Obra from "../models/obra.models.js";

export const createObras = async (req, res) => {
    try {
        const newObra = new Obra(req.body);
        const obraSaved = await newObra.save(newObra);

        res.send(obraSaved);    // y regresamos la respuesta de mongodb
    } catch (e) {
        res.status(500).send({message: ['Error al crear la obra']});
    }
}
export const getObras = async (req, res) => {
    try {
        const obras = await Obra.find();
        console.log(obras)
        res.status(200).json(obras);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: ['Error al obtener las obras']});
    }
}

export const getObra = async (req, res) => {
    try {
        const obra =
            await Obra.findById(req.params.id);
        if (!obra)
            return res.status(404).json({message: ["Obra no encontrada"]});
        res.json(obra);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: ['Error al obtener la obra']});
    }
};

export const updateObra = async (req, res) => {
    try {
        const product = await Obra.findByIdAndUpdate(req.params.id, req.body);
        if (!product)
            return res.status(404).json({message: ["Obra no encontrado"]});
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: ['Error al actualizar la obra']});
    }
};


export const deleteObra = async (req, res) => {
    try {
        const product = await Obra.findByIdAndDelete(req.params.id);
        if (!product)
            return res.status(404).json({message: ["Obra no encontrada"]});
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: ['Error eliminar la obra']});
    }
};