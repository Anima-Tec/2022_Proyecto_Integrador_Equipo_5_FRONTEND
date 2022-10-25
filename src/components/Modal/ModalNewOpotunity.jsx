/* eslint-disable no-import-assign */
/* eslint-disable no-return-assign */
import { React, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import Form from '../Form';
import NewOportunitySchema from '../../lib/schemas/newOportunity.schema';
import InputField from '../Fields/InputField';
import TextareaField from '../Fields/TextareaField';
import SelectField from '../Fields/SelectField';
import useCreateJobOffer from '../../hooks/jobOfffer/mutations/useCreateJobOffer';
import { getWorkAreas } from './utils/getWorkAreas';

export default function ModalNewOpotunity() {
  const { mutateAsync } = useCreateJobOffer();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [workAreas, setWorkAreas] = useState();

  const handleSubmit = async (data) => {
    await mutateAsync(data).then(
      () => {
        onClose();
      },
    );
  };

  const getAreas = async () => {
    const areas = await getWorkAreas();
    setWorkAreas(areas);
  };
  useEffect(() => {
    getAreas();
  }, []);
  return (
    <>
      <Button _hover={{ bg: 'primaryDark' }} bg="primary" onClick={onOpen}>Crear publicación</Button>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay />

        <ModalContent w={{ base: '90%', md: '100%' }}>
          <ModalCloseButton />
          <ModalHeader bg="bgColor" paddingY={10}>Crear publicación</ModalHeader>
          <Form schema={NewOportunitySchema} onSubmit={(data) => handleSubmit(data)}>

            <Box w="100%" h="100%" bg="bgColor">
              <ModalBody bg="bgColor" w="100%" pb={6}>

                <VStack spacing={5}>

                  <InputField type="text" label="Nombre" name="name" />

                  <TextareaField label="Descripción" name="description" helper="Maximo de caraceteres 250" />
                  <SelectField
                    label="Area de trabajo"
                    name="id_work_area"
                    helper="Selecciona el area de trabajo"
                    options={workAreas}
                  />
                  <Flex w="100%">
                    <SelectField
                      label="Modalidad"
                      name="modality"
                      colorScheme="bgColor"
                      mr={3}
                      options={[
                        { value: 'Presencial', label: 'Presencial' },
                        { value: 'Virtual', label: 'Virtual' },
                        { value: 'Mixta', label: 'Mixta' },
                      ]}
                    />
                    <InputField w="100px" type="number" label="Cupos" name="quotas" />
                  </Flex>

                </VStack>

              </ModalBody>
              <ModalFooter bg="bgColor" paddingY={6} w="100%">
                <Button variant="ghost" onClick={onClose}>Cancelar</Button>
                <Button _hover={{ bg: 'primaryDark' }} bg="primary" type="submit" w="100px">Crear</Button>
              </ModalFooter>
            </Box>

          </Form>
        </ModalContent>

      </Modal>
    </>
  );
}
