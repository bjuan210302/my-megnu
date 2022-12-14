import { Modal, Button, Group, Text, Input, Textarea, Stack, TextInput } from '@mantine/core';
import { useState } from 'react';
import { Plate } from '../model/model';

interface ModalProps {
  isOpen: boolean;
  setOpened: Function;
};

export function NewPlateModal(props: ModalProps & { plate?: Plate }) {
  const { isOpen, setOpened, plate } = props;
  const [newPlate, setNewPlate] = useState<Plate>(plate || {} as Plate);
  return (
    <Modal centered
      opened={isOpen}
      onClose={() => setOpened(false)}
      title="Nuevo platillo"
    >
      <Stack spacing={20}>
        <TextInput placeholder="Nombre" label="Nombre" data-autofocus value={newPlate.name}
          onChange={e => setNewPlate({ ...newPlate, name: e.target.value })} />
        <TextInput placeholder="Precio" label="Precio" type="number" value={newPlate.price}
          onChange={e => setNewPlate({ ...newPlate, price: e.target.value })} />
        <TextInput placeholder="Imagen" label="Imagen" type="url" value={newPlate.img}
          onChange={e => setNewPlate({ ...newPlate, img: e.target.value })} />
        <Textarea placeholder="Descripción" label="Descripción" value={newPlate.desc}
          onChange={e => setNewPlate({ ...newPlate, desc: e.target.value })} />
        <Group position='right'>
          <Button variant='subtle' onClick={() => setOpened(false)}>Cancelar</Button>
          <Button>Guardar platillo</Button>
        </Group>
      </Stack>
    </Modal>
  );
}

export function NewCategoryModal(props: ModalProps) {
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