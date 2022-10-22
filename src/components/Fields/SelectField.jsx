import React from 'react';
import {
  FormControl, FormErrorMessage, FormLabel, Select,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

export default function SelectField({
  label, name, defaultValue, options, ...rest
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl variant="floating" isInvalid={errors[name]} w="100%">
      <Select
        w="100%"
        {...register(`${name}`)}
        {...rest}
        autoComplete="off"
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <FormLabel>{label}</FormLabel>
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
