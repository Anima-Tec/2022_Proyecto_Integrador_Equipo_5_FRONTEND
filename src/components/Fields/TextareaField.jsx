import React from 'react';
import {
  FormControl, FormErrorMessage, FormHelperText, FormLabel, Textarea,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

export default function TextareaField({
  label, name, helper, ...rest
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl variant="floating" isInvalid={errors[name]} w="100%" {...rest}>
      <Textarea
        {...register(`${name}`)}
        autoComplete="off"
      />
      <FormLabel color="gray" fontWeight="extrabold">{label}</FormLabel>
      <FormHelperText>{!errors[name] && helper}</FormHelperText>
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}

TextareaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  helper: PropTypes.string,
};

TextareaField.defaultProps = {
  helper: '',
};
