import * as yup from 'yup';

const LoginSchema = yup.object({
  email: yup
    .string()
    .email('email invalido')
    .required('campo requerido.'),
  password: yup
    .string()
    .required('campo requerido.')
    .min(8, 'contraseña minima de 8 caraceteres.')
    .max(20, 'contraseña demasiada larga.'),
});

export default LoginSchema;
