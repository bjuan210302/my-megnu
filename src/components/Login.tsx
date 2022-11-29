import { Group, Header, Stack, Image, Button, Box, TextInput } from "@mantine/core"
import { Admin } from "../model/model"
import { useState } from "react"
import { loginUser, registerUser } from "../model/apiHelper"
import { showNotification } from '@mantine/notifications';
import { IconEdit, IconLogin } from "@tabler/icons";

type Props = {
  setAdmin(x: Admin): any;
}

const Login = (props: Props) => {
  const { setAdmin } = props;
  const [formIsLogin, setFormIsLogin] = useState(true);
  const [userInfo, setUserInfo] = useState<Omit<Admin, '_id' | 'menu'>>({
    name: "busta",
    lastName: "busta",
    contactNumber: 3127061823,
    restaurantName: "Chuzos de yumbo",
    nit: "1234",
    restaurantType: "Restaurant",
    email: "busta2@hotmail.com",
    password: "",
  })

  const registerOrLogin = async () => {
    try {
      const data = formIsLogin ?
        await loginUser({ email: userInfo.email, password: userInfo.password }) :
        await registerUser(userInfo);
      setAdmin(data.user)
    } catch (e: any) {
      const msg = e.response.data = e.response.data instanceof String ? e.response.data : JSON.stringify(e.response.data);
      showNotification({
        title: 'Error',
        message: msg,
        color: 'red'
      })
    }
  }
  return (
    <>
      <Header height={{ base: 50, md: 75 }} p="md">
        xd
      </Header>
      <Group h='calc(100vh - var(--mantine-header-height))' spacing={0}>
        <Stack spacing={20} w='50%' align='center'
        sx={{
          paddingLeft: '10%',
          paddingRight: '10%',
        }}>
          <Group w="100%" grow>
            <Button rightIcon={<IconLogin size={14} />} variant={formIsLogin ? 'filled' : 'subtle'}
              onClick={() => setFormIsLogin(true)}>Entrar</Button>
            <Button rightIcon={<IconEdit size={14} />} variant={formIsLogin ? 'subtle' : 'filled'}
              onClick={() => setFormIsLogin(false)}>Registrarse</Button>
          </Group>
          {!formIsLogin && <Group w="100%" position="apart" grow>
            <TextInput placeholder="Nombre" label="Nombre" data-autofocus value={userInfo.name}
              onChange={e => setUserInfo({ ...userInfo, name: e.target.value })} />
            <TextInput placeholder="Apellido" label="Apellido" data-autofocus value={userInfo.lastName}
              onChange={e => setUserInfo({ ...userInfo, lastName: e.target.value })} />
          </Group>}
          <Group w="100%" position="apart" grow>
            {!formIsLogin && <TextInput placeholder="Número de telefono" label="Número de telefono" data-autofocus value={userInfo.contactNumber}
              onChange={e => setUserInfo({ ...userInfo, contactNumber: Number(e.target.value) })} />}
            <TextInput placeholder="Correo" label="Correo" data-autofocus value={userInfo.email}
              onChange={e => setUserInfo({ ...userInfo, email: e.target.value })} />
          </Group>
          {!formIsLogin && <Group w="100%" position="apart" grow>
            <TextInput placeholder="Nombre del establecimiento" label="Nombre del establecimiento" data-autofocus value={userInfo.restaurantName}
              onChange={e => setUserInfo({ ...userInfo, restaurantName: e.target.value })} />
            <TextInput placeholder="Tipo de establecimiento" label="Tipo de establecimiento" data-autofocus value={userInfo.restaurantType}
              onChange={e => setUserInfo({ ...userInfo, restaurantType: e.target.value })} />
          </Group>}
          {!formIsLogin && <TextInput w="100%" placeholder="NIT" label="NIT" data-autofocus value={userInfo.nit}
            onChange={e => setUserInfo({ ...userInfo, nit: e.target.value })} />}
          <TextInput w="100%" placeholder="Contraseña" label="Contraseña" data-autofocus value={userInfo.password}
            onChange={e => setUserInfo({ ...userInfo, password: e.target.value })} />
          <Button fullWidth onClick={registerOrLogin}>{formIsLogin ? 'Iniciar Sesión' : 'Registrarme'}</Button>
        </Stack>
        <Box w='50%'>
          <Image height='calc(100vh - var(--mantine-header-height))'
            src='https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg'></Image>
        </Box>
      </Group>
    </>
  )
}

export default Login