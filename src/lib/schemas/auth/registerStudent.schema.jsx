/* eslint-disable no-plusplus */
import * as yup from 'yup';

const RegisterStudentSchema = yup.object({
  email: yup
    .string()
    .required('campo requerido')
    .email('email invalido')
    .max(50, 'email demasiado largo'),
  password: yup
    .string()
    .required('campo requerido')
    .min(8, 'contraseña minima de 8 caraceteres')
    .max(20, 'contraseña demasiada larga'),
  ci: yup
    .string()
    .required('campo requerido')
    .matches(/^[0-9]+$/, 'ci invalido')
    .test('ci', 'ci invalido', (value) => {
      if (value) {
        const ci = value.split('');
        const mV = [2, 9, 8, 7, 6, 3, 4];
        let sum = 0;
        for (let i = 0; i < 7; i++) {
          sum += parseInt(ci[i], 10) * mV[i];
        }
        const r = sum % 10;
        const md = r === 0 ? 0 : 10 - r;
        return md === parseInt(ci[7], 10);
      }
      return false;
    })
    .max(8, 'ci invalido'),
  first_name: yup
    .string()
    .required('campo requerido')
    .min(3, 'nombre minimo de 3 caraceteres')
    .matches(/^[a-zA-Z]+$/, 'nombre invalido'),
  second_name: yup
    .string()
    .optional(),
  last_name: yup
    .string()
    .required('campo requerido')
    .min(3, 'apellido minimo de 3 caraceteres')
    .max(20, 'apellido demasiado largo'),
  second_surname: yup
    .string()
    .optional(),
  birth_date: yup
    .date()
    .typeError('ingrese una fecha valida')
    .max(new Date(new Date().setFullYear(new Date().getFullYear() - 15)), 'debes ser mayor de 15 años')
    .min(new Date(new Date().setFullYear(new Date().getFullYear() - 25)), 'debes ser menor de 25 años'),
  high_school: yup
    .string(),
  phone_number: yup
    .string(),
});

export default RegisterStudentSchema;
