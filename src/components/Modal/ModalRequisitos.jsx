/* eslint-disable max-len */
import React from 'react';
import { UnorderedList, ListItem } from '@chakra-ui/react';
import PrimaryModal from './ModalBase';

function ModalRequisitos() {
  return (

    <PrimaryModal
      buttonText="Ver requisitos"
      buttonBgColor="primary"
      buttonBgColorHover="primaryDark"
      title="Requisitos"
      content={(
        <UnorderedList>
          <ListItem>Tener entre 15 y 25 años</ListItem>
          <ListItem>Ser estudiante</ListItem>
          <ListItem>Tener 8 o más de promedio</ListItem>
          <ListItem>No haber tenido experiencia laboral previa</ListItem>
        </UnorderedList>
                )}
    />
  );
}

export default ModalRequisitos;
