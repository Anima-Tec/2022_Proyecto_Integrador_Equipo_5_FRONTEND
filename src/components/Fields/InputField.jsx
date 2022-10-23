import React from 'react';
import {
  FormControl, FormErrorMessage, FormHelperText, FormLabel, Input,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

export default function InputField({
  label, name, helper, ...rest
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl variant="floating" isInvalid={errors[name]} w="100%">
      <Input
        {...register(`${name}`)}
        {...rest}
        autoComplete="off"
      />
      <FormLabel color="gray" fontWeight="extrabold">{label}</FormLabel>
      {helper && <FormHelperText fontSize="xs" color="gray" fontWeight="bold">{helper}</FormHelperText>}
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  helper: PropTypes.string,
};

InputField.defaultProps = {
  helper: '',
};
