// información sobre cada oportunidad de practica
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Badge, Box, Center, Flex, Heading, Image, Link, Text,
} from '@chakra-ui/react';
import ROUTES from '../../routers/config/routes';
import * as Logo from '../../assets/icons/index';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import ModalApply from '../../components/Modal/ModalApply';

export default function OportunidadPracticaPage() {
  const oportunity = {
    name_jobOffer: 'Desarrollo de software',
    description: 'Buscamos estudiantes con gran interés por desarrollar su capacidad de analisis',
    modality: 'Virtual',
    quotas: 3,
    workArea: 'Tecnología',
    company: {
      name_company: 'Google',
      photo: 'https://cdn-icons-png.flaticon.com/512/300/300221.png',
    },
  };

  const apply = 'false';

  return (

    <Box>

      <Box>

        <Flex alignItems="center" marginBottom={3} gap={1.5} flexWrap="wrap">
          <Badge color="black" borderRadius="full" p="4px 6px 2px 6px" bg="secondaryDark" display="flex" alignContent="center" justifyContent="center">
            {oportunity.workArea}
          </Badge>
        </Flex>

        <Box>
          <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold" textAlign="left">
            {oportunity.name_jobOffer}
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
                <Text>{oportunity.quotas}</Text>
              </Center>
            </Flex>
          </Box>

          <Box>
            <Heading as="h5" fontFamily="Poppins" fontSize="xs" fontWeight="bold">
              Modalidad
            </Heading>
            <Flex marginTop="3px">
              <Center gap={1}>
                {oportunity.modality === 'Virtual' && (
                <>
                  <Logo.Computer width="17px" />
                  <Text>{oportunity.modality}</Text>
                </>
                )}
                {oportunity.modality === 'Presencial' && (
                <>
                  <Logo.Empresas width="15px" />
                  <Text>{oportunity.modality}</Text>
                </>
                )}
                {oportunity.modality === 'Mixta' && (
                <>
                  <Logo.Computer width="12px" height="12px" />
                  <Logo.Empresas width="10px" height="10px" />
                  <Text>{oportunity.modality}</Text>
                </>
                )}
              </Center>
            </Flex>
          </Box>

        </Flex>

        <Box marginTop="24px">
          <Heading as="h5" fontFamily="Poppins" fontSize="sm" fontWeight="bold" marginBottom={1}>
            Publicada por
          </Heading>
          <Flex>
            <a href={ROUTES.empresaPage}>
              <Center gap={3}>
                <Image src={oportunity.company.photo} borderRadius="full" boxSize={8} />
                <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold">{oportunity.company.name_company}</Heading>
              </Center>
            </a>
          </Flex>
        </Box>

        <Box marginTop="24px">
          <Box marginBottom={2}>
            <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold">Descripción</Heading>
          </Box>
          <Text maxWidth="800px">{oportunity.description}</Text>
        </Box>

      </Box>

      {/* <Box w="0.5px" bg="gray" margin="0 80px" /> */}

      <Box marginTop="40px">
        {apply === 'false' && (
          <>
            <ModalApply />
            <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold" marginTop={2} textAlign={{ sm: 'center', md: 'left' }}>
              Antes de postularte te recomendamos leer sobre que tratan las
              {' '}
              <Link textDecoration="underline" fontWeight="bold" textColor="primary" href={ROUTES.practicasPracticantes}>
                Prácticas
              </Link>
            </Heading>
          </>
        )}
        {apply === 'true' && (
          <>
            <PrimaryButton p={6} w={{ sm: '100%', md: '50%', lg: '25%' }} bg="gray" hover="gray" cursor="default">
              Ya te has postulado
            </PrimaryButton>
            <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold" marginTop={2} maxWidth="600px" textAlign={{ sm: 'center', md: 'left' }}>
              ¡Revisa los
              {' '}
              <Link textDecoration="underline" fontWeight="bold" textColor="primary" href={ROUTES.recursos}>
                Recursos
              </Link>
              {' '}
              sobre como preprarte para la entrevista antes que te contacte la empresa!
            </Heading>
          </>
        )}
      </Box>
    </Box>

  );
}
