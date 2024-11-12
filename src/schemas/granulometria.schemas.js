import { z } from 'zod';

export const granulometriaSchema = z.object({
    tres_pulgadas: z.number().nullish(),
    dos_pulgadas: z.number().nullish(),
    media_pulgada: z.number().nullish(),
    tres_cuartos_pulgada: z.number().nullish(),
    un_unmedio_pulgada: z.number().nullish(),
    tres_octavos_pulgada: z.number().nullish(),
    un_cuarto_pulgada: z.number().nullish(),
    numero_cuatro: z.number().nullish(),
    numero_diez: z.number().nullish(),
    numero_veinte: z.number().nullish(),
    numero_cuarenta: z.number().nullish(),
    numero_sesenta: z.number().nullish(),
    numero_cien: z.number().nullish(),
    numero_docientos: z.number().nullish(),
    ensaye: z.string({
        required_error: 'El ensaye asociado es requerido'
    })
});


