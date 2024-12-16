import { z } from 'zod';

export const reporteSchema = z.object({
    fecha_reporte: z.string({
        required_error: "La fecha del reporte es obligatoria",
    }),
    destinatario: z.string({
        required_error: "El nombre del destinatario es obligatorio",
    }),
    no_ensayes: z.number({
        required_error: 'El no ensayes es obligatorio',
    }),
    lugar: z.string({
        required_error: "El lugar es obligatorio",
    }),
    objetivo: z.string({
        required_error: "El objetivo es obligatorio",
    }),
    observacion: z.string({
        required_error: "La observacion es obligatoria",
    }),
    obra: z.string({
        required_error: "La obra asociada es obligatoria"
    })
})