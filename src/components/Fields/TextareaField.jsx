import React from 'react';
import {
  FormControl, FormErrorMessage, FormLabel, Textarea,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

export default function TextareaField({
  label, name, type, ...rest
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl variant="floating" isInvalid={errors[name]} w="100%">
      <Textarea
        w="100%"
        {...register(`${name}`)}
        {...rest}
        autoComplete="off"
        type={type}
      />
      <FormLabel>{label}</FormLabel>
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}

TextareaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
