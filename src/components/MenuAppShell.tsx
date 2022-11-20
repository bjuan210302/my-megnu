import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Title,
} from '@mantine/core';

type ManuAppShellProps = {
  categoryTitle: string;
  categoryNames: string[];
  children: React.ReactNode
}
export function MenuAppShell(props: ManuAppShellProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { categoryTitle, children, categoryNames } = props;
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
          position={{ right: 0, left: 'var(--mantine-navbar-width, 0px)' as unknown as number }}>
          <MenuHeader opened={opened} setOpened={setOpened} categoryTitle={categoryTitle} />
        </Header>
      }
      navbar={
        <Navbar p="md" hiddenBreakpoint="md" hidden={!opened} width={{ sm: 0, md: 250, lg: 250, xl: 300 }}
          position={{ top: '0' as unknown as number }} height='100vh'>
          <ManuNavbar opened={opened} categoryNames={categoryNames} />
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
      <Title>{categoryTitle}</Title>
    </div>
  )
}

type MenuNavbarProps = {
  opened: boolean;
  categoryNames: string[];
};

function ManuNavbar(props: MenuNavbarProps) {
  const { opened, categoryNames } = props;
  return (
    <>
      <Title>Mi Megnú</Title>
      {categoryNames.map(name => <div>{name}</div>)}
    </>
  )
}