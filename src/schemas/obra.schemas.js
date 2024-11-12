import {z} from 'zod';

export const obraSchema = z.object({
    nombre: z.string({
        required_error: 'El nombre de la obra es obligatorio',
    }),
    dependencia: z.string({
        required_error: 'La dependencia de la solicitud es obligatorio',
    }),
    contratista: z.string({
        required_error: 'El contratista es obligatorio',
    }),
    estado: z.string({
        required_error: 'El estado es obligatorio',
    }),
    importe: z.number({
        required_error: 'El importeres obligatorio',
    }),
    tramo: z.string({
        required_error: 'El tramo obligatorio',
    }),
    fecha_inicio: z.string({
        required_error: 'La fecha de inicio es obligatoria',
    }),
    fecha_fin: z.string({
        required_error: 'La fecha de fin es obligatoria',
    })
});

