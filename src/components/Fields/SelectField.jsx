import React from 'react';
import {
  FormControl, FormErrorMessage, FormLabel, Select,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

export default function SelectField({
  label, name, options, ...rest
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl variant="floating" isInvalid={errors[name]} w="100%" {...rest}>
      <Select
        {...register(`${name}`)}
        autoComplete="off"
        defaultValue="default"
        required
      >
        <option value="default" disabled>Seleccione una opción</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </Select>
      <FormLabel color="gray" fontWeight="extrabold">{label}</FormLabel>
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  })).isRequired,
};
