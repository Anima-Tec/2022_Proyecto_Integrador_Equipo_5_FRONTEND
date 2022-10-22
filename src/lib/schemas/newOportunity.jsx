import * as yup from 'yup';

const newOportunity = yup.object({
  title: yup
    .string()
    .required('campo requerido')
    .min(5, 'mínimo 5 caracteres')
    .max(50, 'máximo 50 caracteres'),
  description: yup
    .string()
    .required('campo requerido')
    .min(10, 'mínimo 10 caracteres')
    .max(255, 'máximo 255 caracteres'),
  // modality: yup
  //   .string() ES UN SELECT Y NO SE COMO VALIDARLO
  //   .required('campo requerido')
  //   .min(5, 'mínimo 5 caracteres')
  //   .max(50, 'máximo 50 caracteres'),
  quotas: yup
    .number()
    .required('campo requerido')
    .min(1, 'mínimo 1 cupo')
    .max(10, 'máximo 10 cupos'),
  // workArea: yup
  //   .string() SON VARIAS PALABRAS Y NO SE COMO VALIDARLO
  //   .required('campo requerido')
  //   .min(5, 'mínimo 5 caracteres')
  //   .max(50, 'máximo 50 caracteres'),
});

export default newOportunity;
