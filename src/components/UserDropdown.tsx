import { Menu, Button, Text, Title, Avatar, Stack, useMantineColorScheme } from '@mantine/core';
import {
  IconSettings,
  IconTransferOut,
  IconUserCircle,
  IconChevronDown
} from '@tabler/icons';
import { Admin } from 'model/model';
import { useContext } from 'react';
import { AdminContext } from '../App';

export function UserDropdown() {
  const { setAdmin } = useContext(AdminContext);
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Menu shadow="md" width={365} withArrow offset={10}>
      <Menu.Target>
        <Button variant='light' color='gray'
          sx={{
            color: dark ? 'white' : 'black',
          }}
          leftIcon={<IconUserCircle />} rightIcon={<IconChevronDown />}>Juan</Button>
      </Menu.Target>

      <Menu.Dropdown pt={25}>
        <Stack spacing={0} align='center'>
          <Avatar size={100} styles={{
            root: {
              borderRadius: '50%',
            },
            placeholder: {
              fontFamily: 'Roboto',
              color: 'white',
              background: 'black',
            }
          }}>JB</Avatar>
          <Title order={2} size={25} mt={20}>Juan Bustamante</Title>
          <Text size={13} weight={600}>correo.electronico@gmail.com</Text>
        </Stack>

        <Menu.Divider mt={25} />
        <Menu.Item icon={<IconSettings size={14} />}>Mi Perfil</Menu.Item>
        <Menu.Item color="red" icon={<IconTransferOut size={14} />}
          onClick={() => { setAdmin({} as Admin) }}>Cerrar Sesión</Menu.Item>
      </Menu.Dropdown>
    </Menu >
  );
}