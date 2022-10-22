/* eslint-disable no-import-assign */
/* eslint-disable no-return-assign */
import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import Form from '../Form';
import NewOportunitySchema from '../../lib/schemas/newOportunity';
import InputField from '../Fields/InputField';
import TextareaField from '../Fields/TextareaField';
import SelectField from '../Fields/SelectField';

function ModalNewOpotunity() {
  // const { mutateAsync } = useLogin();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const handleSubmit = async (data) => {
  //   try {
  //     await mutateAsync(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <>
      <Button _hover={{ bg: 'primaryDark' }} bg="primary" onClick={onOpen}>Crear publicación</Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />

        <ModalContent w={{ base: '90%', md: '100%' }}>
          <ModalHeader bg="bgColor" paddingY={10}>Nueva publicación</ModalHeader>

          <ModalCloseButton />

          <ModalBody bg="bgColor">
            {/* <Form schema={NewOportunitySchema} onSubmit={(data) => handleSubmit(data)}> */}
            <Form schema={NewOportunitySchema}>
              <InputField type="text" label="Titulo" name="title" /> {/* en schema.prisma es "name" */}
              <TextareaField label="Descripción" name="description" />
              <SelectField
                label="Modalidad"
                name="modality"
                colorScheme="bgColor"
                options={[
                  { value: 'Presencial', label: 'Presencial' },
                  { value: 'Virtual', label: 'Virtual' },
                  { value: 'Mixta', label: 'Mixta' },
                ]}
              />
              <InputField w="100px" type="number" label="Cupos" name="quotas" />
            </Form>
          </ModalBody>

          <ModalFooter bg="bgColor" paddingY={6}>
            <Button variant="ghost" onClick={onClose}>Cancelar</Button>
            <Button _hover={{ bg: 'primaryDark' }} bg="primary" onClick={onClose} type="submit" w="100px">Crear</Button>
          </ModalFooter>

        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalNewOpotunity;
