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
  SegmentedControl
} from '@mantine/core';

type ManuAppShellProps = {
  categoryTitle: string;
  categoryNames: string[];
  setSelectedCategory: Function;
  children: React.ReactNode;
}
export function MenuAppShell(props: ManuAppShellProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { categoryTitle, children, categoryNames, setSelectedCategory } = props;
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
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.contentBackground[0],
        },
      }}
      navbarOffsetBreakpoint="md"
      header={
        <Header
          height={{ base: 50, md: 75 }} p="md"
          position={{ right: 0, left: 'var(--mantine-navbar-width, 0px)' as unknown as number }}
          sx={{ borderLeft: '1px solid #e9ecef'}}>
          <MenuHeader opened={opened} setOpened={setOpened} categoryTitle={categoryTitle} />
        </Header>
      }
      navbar={
        <Navbar hiddenBreakpoint="md" hidden={!opened} width={{ sm: 0, md: 250, lg: 250, xl: 300 }}
          position={{ top: '0' as unknown as number }} height='100vh'
          sx={{border: 'unset'}}
          >
          <ManuNavbar opened={opened} categoryNames={categoryNames} setSelectedCategory={setSelectedCategory} />
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
    </div>
  )
}

type MenuNavbarProps = {
  opened: boolean;
  categoryNames: string[];
  setSelectedCategory: Function;
};

function ManuNavbar(props: MenuNavbarProps) {
  const theme = useMantineTheme();
  const { opened, categoryNames, setSelectedCategory } = props;
  return (
    <>
      <Stack align='center' mt='var(--mantine-header-height)' py={28}>
        <Image src='/megnu-logo.svg' width={100}></Image>
        <Title order={1}>Mi Megnú</Title>
      </Stack>
      <SegmentedControl orientation="vertical" data={categoryNames} w='100%' mt={21}
      onChange={value => {console.log(value);setSelectedCategory(value)}}
        styles={{
          root: {
            backgroundColor: 'unset',
            padding: 0,
            borderRadius: 0,
          },
          control: {
            paddingLeft: 40,
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
          },
          labelActive: {
            border: 'unset',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.contentBackground[0],
          }
        }}
      />
    </>
  )
}

