/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { VStack } from '@chakra-ui/react';

export default function Form({
  children, schema, defaultValues, onSubmit,
}) {
  const { handleSubmit, ...methods } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          {children}
        </VStack>
      </form>
    </FormProvider>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  schema: PropTypes.any.isRequired,
  defaultValues: PropTypes.any,
  onSubmit: PropTypes.func.isRequired,
};
