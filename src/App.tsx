import { Image, Input, SimpleGrid, Stack, ColorSchemeProvider, ColorScheme } from '@mantine/core'
import { MantineThemeOverride, MantineProvider } from '@mantine/styles'
import { IconSearch } from '@tabler/icons'
import { EmptyCard, PlateCard } from './components/PlateCard'
import { useState, useEffect } from 'react'
import { MenuAppShell } from './components/MenuAppShell'
import { testCategories, Category, Plate, categoryNames, Admin } from './model/model'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import { NotificationsProvider } from '@mantine/notifications'

const theme: MantineThemeOverride = {
  headings: {
    fontFamily: 'Roboto, sans-serif',
  },
  colors: {
    contentBackground: ['#D8D8D8'],
  },
  fontFamily: "Open Sans, sans-serif",
  components: {
    Title: {
      styles: (theme) => ({
        root: {
          color: theme.colorScheme === 'light' ? '#585858' : '#c4c2c1',
          '&:is(h1)': {
            fontFamily: 'Roboto Slab, serif',
            color: theme.colorScheme === 'light' ? 'black' : 'white',
            textAlign: 'center',
          },
          '&:is(h2)': {
            fontSize: 34,
          }
        },
      })
    },
  }
}

function App() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({} as Admin);
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleDarkMode = (value?: ColorScheme) => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  const [selectedCategory, setSelectedCategory] = useState<Category>(testCategories['Postres']);
  const _setSelectedCategory = (categoryName: string) => {
    setSelectedCategory(testCategories[categoryName])
    setPlatesShowing(testCategories[categoryName].plates)
  }
  const [platesShowing, setPlatesShowing] = useState<Plate[]>(selectedCategory.plates);

  const filterPlates = (newVal: any) => {
    newVal = newVal.target.value.toLowerCase()
    setPlatesShowing(selectedCategory.plates.filter(plate => plate.name.toLowerCase().includes(newVal)))
  }

  useEffect(() => {
    if (admin._id)
      navigate('/application')
    else
      navigate('/')
  }, [admin])
  
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleDarkMode}>
      <MantineProvider theme={{ ...theme, colorScheme }} withGlobalStyles withNormalizeCSS>
        <NotificationsProvider position='top-center'>

          <Routes>

            <Route path='/' element={<Login setAdmin={setAdmin} />} />

            <Route path='/application' element={
              <MenuAppShell categoryTitle={selectedCategory.name} categoryNames={categoryNames}
                setSelectedCategory={_setSelectedCategory} setAdmin={setAdmin}>
                <Image src={selectedCategory.bannerImg} height={230} />
                <Stack px='4%' py={30} sx={{ gap: 50 }} align='center'>
                  <Input variant="filled" placeholder="Search" w='45%'
                    rightSection={<IconSearch />}
                    onChange={filterPlates}
                  />
                  <SimpleGrid cols={3} sx={{ gap: 50 }}
                    breakpoints={[
                      { minWidth: 500, cols: 1 },
                      { minWidth: 700, cols: 2 },
                      { minWidth: 1300, cols: 3 },
                    ]}>
                    {platesShowing.map(plate => <PlateCard plate={plate} />)}
                    <EmptyCard />
                  </SimpleGrid>
                </Stack>
              </MenuAppShell>} />

          </Routes>

        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
