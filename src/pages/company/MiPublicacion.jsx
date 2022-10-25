// información sobre cada oportunidad de practica
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Badge, Box, Center, Divider, Flex, Heading, Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Button, useDisclosure, Wrap, WrapItem, Image,
} from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import * as Logo from '../../assets/icons/index';
import CardStudent from '../../components/Cards/CardStudent';
import JobOfferService from '../../networking/services/company/JobOfferService';
import ApplyService from '../../networking/services/apply/ApplyService';

const photo = 'https://www.tuasesordemoda.com/wp-content/uploads/2021/12/rostro-mujer-cuadrado.jpg';
export default function MiPublicacion() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [studentData, setStudentData] = React.useState([]);

  const handleStudentData = (data) => {
    setStudentData(data);
    onOpen();
  };
  const { id } = useParams();
  const {
    data: StudentsApply, isLoading: loadingApply, error: errorApply,
  } = useQuery(['getStudentsApply'], () => ApplyService.getStudentsToApply(id));
  const {
    isLoading: loadingJobOffer, error: errorJobOffer, data: JobOffer,
  } = useQuery(['getJobOffer'], () => JobOfferService.getJobOffer(id));

  const handleDeleteStudentToApply = () => {
    console.log('delete');
  };

  return (

    <>
      {loadingJobOffer && <p>Cargando...</p>}
      {errorJobOffer && <p>Hubo un error</p>}
      {JobOffer && (
        <Box>

          <Box>

            <Flex alignItems="center" marginBottom={3} gap={1.5} flexWrap="wrap">
              <Badge color="black" borderRadius="full" p="4px 6px 2px 6px" bg="secondaryDark" display="flex" alignContent="center" justifyContent="center">
                {JobOffer.workArea}
              </Badge>
            </Flex>

            <Box>
              <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold" textAlign="left">
                {JobOffer.name}
              </Heading>
            </Box>

            <Flex gap={5} marginTop={3}>
              <Box>
                <Heading as="h5" fontFamily="Poppins" fontSize="xs" fontWeight="bold">
                  Cupos
                </Heading>
                <Flex justifyContent="center">
                  <Center gap={1}>
                    <Logo.People width="15px" />
                    <Text>{JobOffer.quotas}</Text>
                  </Center>
                </Flex>
              </Box>

              <Box>
                <Heading as="h5" fontFamily="Poppins" fontSize="xs" fontWeight="bold">
                  Modalidad
                </Heading>
                <Flex marginTop="3px">
                  <Center gap={1}>
                    {JobOffer.modality === 'Virtual' && (
                      <>
                        <Logo.Computer width="17px" />
                        <Text>{JobOffer.modality}</Text>
                      </>
                    )}
                    {JobOffer.modality === 'Presencial' && (
                      <>
                        <Logo.Empresas width="15px" />
                        <Text>{JobOffer.modality}</Text>
                      </>
                    )}
                    {JobOffer.modality === 'Mixta' && (
                      <>
                        <Logo.Computer width="12px" height="12px" />
                        <Logo.Empresas width="10px" height="10px" />
                        <Text>{JobOffer.modality}</Text>
                      </>
                    )}
                  </Center>
                </Flex>
              </Box>

            </Flex>

            <Box marginTop="24px">
              <Box marginBottom={2}>
                <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold">Descripción</Heading>
              </Box>
              <Text maxWidth="800px">{JobOffer.description}</Text>
            </Box>

          </Box>

          <Divider h="3px" marginTop={5} color="gray" opacity="0.2" />
          {loadingApply && <p>Cargando...</p>}
          {errorApply && <p>Hubo un error</p>}
          <Box marginBottom={2}>
            <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold">Postulados</Heading>
          </Box>
          {StudentsApply && (
          <Wrap marginTop={6} spacing={4}>
            {StudentsApply?.map((student) => (
              <WrapItem w={{ sm: '100%', md: '40%', lg: '40%' }} justifyContent={{ sm: 'center', md: 'flex-start' }}>
                <CardStudent
                  key={student.id_student}
                  name={student.firstName}
                  photo={photo}
                  interests={student.workArea}
                  onClick={() => handleStudentData(student)}
                />
              </WrapItem>
            ))}
          </Wrap>
          )}
        </Box>
      )}
      <Modal onClose={onClose} isOpen={isOpen} isCentered bg="bgColor" size="md">
        <ModalOverlay />
        <ModalContent w={{ base: '90%', md: '100%' }}>
          <ModalHeader paddingTop={10} bg="bgColor" paddingBottom={0}>

            <Flex>
              <Center gap={3}>
                <Image src={photo} borderRadius="full" boxSize={10} />
                <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold">{studentData.firstName} {studentData.lastName}</Heading>
              </Center>
            </Flex>
            <Flex alignItems="center" marginTop={3} gap={1.5} flexWrap="wrap" marginBottom={3}>
              {studentData.workArea?.map((interest) => (
                <Badge color="black" borderRadius="full" p="4px 6px 2px 6px" bg="secondaryDark" key={interest} display="flex" alignContent="center" justifyContent="center">
                  {interest?.name}
                </Badge>
              ))}
            </Flex>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody bg="bgColor" paddingTop={0}>
            <Flex>
              <Center gap={2}>
                <Logo.Date width="15px" />
                <Text>{studentData?.birthdate}</Text>
              </Center>
            </Flex>
            <Flex>
              <Center gap={2}>
                <Logo.Practicantes width="15px" />
                <Text>{studentData?.highschool}</Text>
              </Center>
            </Flex>

            <Box marginY={3}>
              <Heading as="h5" fontFamily="Poppins" fontSize="sm" fontWeight="bold" marginBottom={2}>Descripción</Heading>
              <Text>
                {studentData?.description}
              </Text>
            </Box>

            <Flex>
              <Center gap={2}>
                <Logo.Email width="15px" />
                <Text>{studentData?.email}</Text>
              </Center>
            </Flex>

          </ModalBody>

          <ModalFooter bg="bgColor" paddingY={6}>
            <Flex justify="space-between" w="100%">
              <Box>
                <Button onClick={handleDeleteStudentToApply} colorScheme="secondary" variant="outline" size="sm">
                  Limpiar
                </Button>
              </Box>
              <Box>
                <Button variant="ghost" onClick={onClose}>Cerrar</Button>
                <Button _hover={{ bg: 'primaryDark' }} bg="primary" onClick={onClose}>
                  Descargar CV
                </Button>
              </Box>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

  );
}
