import { z } from 'zod';

export const ensayeSchema = z.object({
    solicitante: z.string({
        required_error: 'El nombre del solicitante es requerido'
    }),
    norma: z.string({
        required_error: 'La norma a seguida es requerida'
    }),
    fecha_muestreo: z.string({
        required_error: 'La fecha de muestreo es obligatoria'
    }),
    localizacion: z.string({
        required_error: 'La localización es requerida'
    }),
    ubicacion_muestra: z.string({
        required_error: 'La ubicacion del muestro es requerida'
    }),
    tipo_material: z.string({
        required_error: 'El tipo de material es requerido'
    }),
    fecha_entrega: z.string({
        required_error: 'La fecha de entrega es requerida'
    }),
    tipo: z.string({
        required_error: 'El tipo de ensaye es requerido'
    }),
    capa: z.string({
        required_error: 'El tipo de capa es requerido'
    }),
    masa_muestra: z.string({
        required_error: 'La masa de la muestra es requerida'
    }),
    peso_volumetrico: z.number({
        required_error: 'El peso volumetrico es requerido'
    }),
    masa_alterada: z.number({
        required_error: 'La masa alterada es requerida'
    }),
    tipo_granulometria: z.number({
        required_error: 'El tipo de granulometria es requerida'
    }),
    volumen_tara: z.number({
        required_error: 'El volumen de la tara es requerida'
    }),
    desperdicio: z.string({
        required_error: 'El peso del desperdicio es requerido'
    }),
    profundidad: z.number({
        required_error: 'La profundidad es requerida'
    }),
    reporte: z.string({
        required_error: 'El reporte asociado es requerido'
    })
})
