import { Modal, Button, Group, Text, Input, Textarea, Stack, TextInput } from '@mantine/core';
import { createCategory } from '../model/apiHelper';
import { useContext, useState } from 'react';
import { Category, Plate } from '../model/model';
import { AdminContext } from '../App';

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
        <TextInput placeholder="Imagen" label="Imagen" type="url" value={newPlate.dishImg}
          onChange={e => setNewPlate({ ...newPlate, dishImg: e.target.value })} />
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
  const { admin, setAllCategories } = useContext(AdminContext);
  const { isOpen, setOpened } = props;
  const [category, setCategory] = useState({ name: '', bannerImg: '' })

  const submitCategory = () => {
    createCategory({ restaurantAdminId: admin._id, category: category }).then(categories => setAllCategories(categories.reduce<Record<string, Category>>(
      (obj, c) => {
        return { ...obj, [c.name]: {} as Category }
      }, {})))
    setOpened(false);
  }
  return (
    <Modal centered
      opened={isOpen}
      onClose={() => setOpened(false)}
      title="Nueva categoría"
    >
      <Stack spacing={20}>
        <TextInput placeholder="Nombre" label="Nombre" data-autofocus
          onChange={e => setCategory({ ...category, name: e.target.value })} />
        <TextInput placeholder="Banner" label="Banner" type="url"
          onChange={e => setCategory({ ...category, bannerImg: e.target.value })} />
        <Group position='right'>
          <Button variant='subtle' onClick={() => setOpened(false)}>Cancelar</Button>
          <Button
            onClick={() => submitCategory()}
          >Guardar categoría</Button>
        </Group>
      </Stack>
    </Modal>
  );
}