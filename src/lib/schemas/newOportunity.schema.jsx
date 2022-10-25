import * as yup from 'yup';

const NewOportunitySchema = yup.object({
  name: yup
    .string()
    .required('campo requerido')
    .min(3, 'titulo minimo de 3 caraceteres')
    .max(30, 'titulo demasiado largo'),
  description: yup
    .string()
    .required('campo requerido')
    .min(3, 'descripcion minimo de 3 caraceteres')
    .max(250, 'descripcion demasiado larga'),
  modality: yup
    .string(),
  quotas: yup
    .number()
    .required('')
    .min(1, 'minimo 1 cupo')
    .typeError('ingrese un numero'),
  id_work_area: yup
    .number(),
});

export default NewOportunitySchema;
