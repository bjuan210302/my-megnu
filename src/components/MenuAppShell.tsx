import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Title,
  Input,
  SimpleGrid,
  Image,
  Stack,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { PlateCard } from './PlateCard';

export function MenuAppShell(props: any) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      padding={0}
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.contentBackground[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={
        <Header
          height={{ base: 50, md: 75 }} p="md"
          position={{ right: 0, left: 'var(--mantine-navbar-width, 0px)' as unknown as number }}>
          <MenuHeader opened={opened} setOpened={setOpened} />
        </Header>
      }
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 330 }}
          position={{ top: '0' as unknown as number }} height='100vh'>
          <ManuNavbar opened={opened} />
        </Navbar>
      }
    >
      <Image src="https://cdn.colombia.com/gastronomia/2011/09/14/postre-de-deditos-de-mama-3361.jpg"
        height={230}
      />
      <Stack px={50} pt={30} sx={{ gap: 50 }} align='center'>
        <Input
          rightSection={<IconSearch />}
          variant="filled"
          placeholder="Search"
          w='45%'
        />
        <SimpleGrid cols={3} sx={{ gap: 50 }}>
          <PlateCard />
          <PlateCard />
          <PlateCard />
        </SimpleGrid>
      </Stack>
    </AppShell>
  );
}

function ManuNavbar(props: { opened: boolean }) {
  const { opened } = props;
  return (
    <Title>nav</Title>
  )
}

function MenuHeader(props: { opened: boolean, setOpened: Function }) {
  const theme = useMantineTheme();
  const { opened, setOpened } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o: boolean) => !o)}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </MediaQuery>
      <Title>header</Title>
    </div>
  )
}