import { useState } from 'react';
import { Modal, Button, Group, Text, Input, Textarea, Stack, TextInput } from '@mantine/core';

export function NewPlateModal(props: { isOpen: boolean, setOpened: Function }) {
  const { isOpen, setOpened } = props;
  return (
    <Modal centered
      opened={isOpen}
      onClose={() => setOpened(false)}
      title="Nuevo platillo"
    >
      <Stack spacing={20}>
        <TextInput placeholder="Nombre" label="Nombre" data-autofocus />
        <TextInput placeholder="Precio" label="Precio" type="number" />
        <TextInput placeholder="Imagen" label="Imagen" type="url" />
        <Textarea placeholder="Descripción" label="Descripción" />
        <Group position='right'>
          <Button variant='subtle' onClick={() => setOpened(false)}>Cancelar</Button>
          <Button>Guardar platillo</Button>
        </Group>
      </Stack>
    </Modal>
  );
}

export function NewCategoryModal(props: { isOpen: boolean, setOpened: Function }) {
  const { isOpen, setOpened } = props;
  return (
    <Modal centered
      opened={isOpen}
      onClose={() => setOpened(false)}
      title="Nueva categoría"
    >
      <Stack spacing={20}>
        <TextInput placeholder="Nombre" label="Nombre" data-autofocus />
        <TextInput placeholder="Banner" label="Banner" type="url" />
        <Group position='right'>
          <Button variant='subtle' onClick={() => setOpened(false)}>Cancelar</Button>
          <Button>Guardar categoría</Button>
        </Group>
      </Stack>
    </Modal>
  );
}