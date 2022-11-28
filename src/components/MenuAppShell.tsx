import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Title,
  Image,
  Stack,
  SegmentedControl,
  Text,
  Group,
  Switch,
  useMantineColorScheme
} from '@mantine/core';
import { UserDropdown } from './UserDropdown'
import { IconMoonStars, IconSun } from '@tabler/icons';

type ManuAppShellProps = {
  categoryTitle: string;
  categoryNames: string[];
  setSelectedCategory: Function;
  setIsCategoryModalOpen: Function;
  children: React.ReactNode;
}
export function MenuAppShell(props: ManuAppShellProps) {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const [navbarOpened, setNavbarOpened] = useState(true);
  const { categoryTitle, children, categoryNames, setSelectedCategory, setIsCategoryModalOpen } = props;
  const dark = colorScheme === 'dark';
  return (
    <AppShell
      padding={0}
      styles={{
        root: {
          display: 'flex',
          width: '100%'
        },
        body: {
          width: '100%'
        },
        main: {
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          background: dark ? theme.colors.dark[8] : theme.colors.contentBackground[0],
        },
      }}
      navbarOffsetBreakpoint="md"
      header={
        <Header
          height={{ base: 50, md: 75 }} p="md"
          position={{
            right: 0,
            left: 'var(--mantine-navbar-width, 0px)' as unknown as number,
          }}
          sx={{
            borderLeft: '1px solid #e9ecef',
            borderColor: dark ? theme.colors.dark[5] : '#e9ecef',
          }}>
          <MenuHeader opened={navbarOpened} setOpened={setNavbarOpened} categoryTitle={categoryTitle} />
        </Header>
      }
      navbar={
        <Navbar hiddenBreakpoint="md" hidden={!navbarOpened} width={{
          sm: navbarOpened ? 250 : 0,
          md: 250, lg: 250, xl: 300
        }}
          position={{ top: '0' as unknown as number }} height='100vh'
          sx={{ border: 'unset' }}
        >
          <ManuNavbar categoryNames={categoryNames}
            setSelectedCategory={setSelectedCategory} setIsCategoryModalOpen={setIsCategoryModalOpen} />
        </Navbar>
      }
    >
      {children}
    </AppShell>
  );
}

type HeaderProps = {
  opened: boolean;
  setOpened: Function;
  categoryTitle: string;
};

function MenuHeader(props: HeaderProps) {
  const theme = useMantineTheme();
  const { opened, setOpened, categoryTitle } = props;
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <MediaQuery largerThan="md" styles={{ display: 'none' }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o: boolean) => !o)}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </MediaQuery>
      <Title order={2}>{categoryTitle}</Title>
      <Group position='right' w='100%'>
        <Switch sx={{ display: 'flex' }}
          size="lg"
          color={dark ? 'gray' : 'dark'}
          onLabel={<IconSun size={16} stroke={2.5} color={theme.colors.yellow[4]} />}
          offLabel={<IconMoonStars size={16} stroke={2.5} color={theme.colors.blue[6]} />}
          onChange={() => toggleColorScheme()}
        />
        <UserDropdown />
      </Group>
    </div>
  )
}

type MenuNavbarProps = {
  categoryNames: string[];
  setSelectedCategory: Function;
  setIsCategoryModalOpen: Function;
};

function ManuNavbar(props: MenuNavbarProps) {
  const theme = useMantineTheme();
  const { categoryNames, setSelectedCategory, setIsCategoryModalOpen } = props;
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <>
      <Stack align='center' mt='var(--mantine-header-height)' py={28}>
        <Image src='/megnu-logo.svg' width={100}></Image>
        <Title order={1}>Mi Megnú</Title>
      </Stack>
      <Stack pl={40} spacing={9}>
        <SegmentedControl orientation="vertical" data={categoryNames}
          w='100%' mt={21}
          onChange={value => { setSelectedCategory(value) }}
          styles={{
            root: {
              backgroundColor: 'unset',
              padding: 0,
              borderRadius: 0,
              gap: 9,
            },
            label: {
              fontSize: 23,
              fontWeight: 600,
              padding: '8px 15px',
              letterSpacing: '0.05em',
              textAlign: 'left',
              borderRadius: '10px 0 0 10px'
            },
            active: {
              boxShadow: 'unset',
              backgroundColor: 'unset'
            },
            labelActive: {
              border: 'unset',
              backgroundColor: dark ? theme.colors.dark[8] : theme.colors.contentBackground[0],
            }
          }}
        />
        <Text
          sx={{
            fontSize: 23,
            fontWeight: 400,
            fontStyle: 'italic',
            padding: '8px 15px',
            letterSpacing: '0.05em',
            color: dark ? theme.colors.dark[3] : theme.colors.dark[0],
            cursor: 'pointer'
          }}
          onClick={() => setIsCategoryModalOpen(true)}
        >Nueva categoría...</Text>
      </Stack>
    </>
  )
}

