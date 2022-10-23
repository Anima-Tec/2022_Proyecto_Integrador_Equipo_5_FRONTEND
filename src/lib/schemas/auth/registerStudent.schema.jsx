/* eslint-disable no-plusplus */
import * as yup from 'yup';

const RegisterStudentSchema = yup.object({
  email: yup
    .string()
    .required('campo requerido')
    .email('email inválido')
    .max(50, 'email demasiado largo'),
  password: yup
    .string()
    .required('campo requerido')
    .min(8, 'contraseña mínima de 8 caraceteres')
    .max(20, 'contraseña demasiado larga'),
  ci: yup
    .string()
    .required('campo requerido')
    .matches(/^[0-9]+$/, 'ci inválida')
    .test('ci', 'ci inválida', (value) => {
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
    .max(8, 'ci inválido'),
  first_name: yup
    .string()
    .required('campo requerido')
    .min(3, 'nombre mínimo de 3 caraceteres')
    .matches(/^[a-zA-Z]+$/, 'nombre inválido'),
  second_name: yup
    .string()
    .optional(),
  last_name: yup
    .string()
    .required('campo requerido')
    .min(3, 'apellido mínimo de 3 caracteres')
    .max(20, 'apellido demasiado largo'),
  second_surname: yup
    .string()
    .optional(),
  birth_date: yup
    .date()
    .typeError('ingrese una fecha válida')
    .max(new Date(new Date().setFullYear(new Date().getFullYear() - 15)), 'debes ser mayor de 15 años')
    .min(new Date(new Date().setFullYear(new Date().getFullYear() - 25)), 'debes ser menor de 25 años'),
  high_school: yup
    .string(),
  phone_number: yup
    .string(),
});

export default RegisterStudentSchema;
