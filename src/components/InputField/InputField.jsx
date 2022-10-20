import React from 'react';
import {
  FormControl, FormErrorMessage, FormLabel, Input,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

export default function InputField({ label, name, ...rest }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl variant="floating" isInvalid={errors[name]}>
      <Input
        {...register(`${name}`)}
        {...rest}
      />
      <FormLabel>{label}</FormLabel>
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};