import { Image, Input, SimpleGrid, Stack, ColorSchemeProvider, ColorScheme } from '@mantine/core'
import { MantineThemeOverride, MantineProvider } from '@mantine/styles'
import { IconSearch } from '@tabler/icons'
import { EmptyCard, PlateCard } from './components/PlateCard'
import { useState, useEffect, useContext, createContext } from 'react'
import { MenuAppShell } from './components/MenuAppShell'
import { Category, Plate, Admin } from './model/model'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import { NotificationsProvider } from '@mantine/notifications'
import { getCategory } from './model/apiHelper'

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

export const AdminContext = createContext({
  admin: {} as Admin,
  setAdmin: (() => { }) as React.Dispatch<React.SetStateAction<Admin>>,
  setAllCategories: (() => { }) as React.Dispatch<React.SetStateAction<Record<string, Category>>>,
});

function App() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({} as Admin);
  const [allCategories, setAllCategories] = useState<Record<string, Category>>({})
  const context = { admin, setAdmin, allCategories, setAllCategories }
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleDarkMode = (value?: ColorScheme) => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const _setSelectedCategory = (categoryName: string) => {
    setSelectedCategory(allCategories[categoryName])
    setPlatesShowing(allCategories[categoryName].dishes)
  }
  const [platesShowing, setPlatesShowing] = useState<Plate[] | undefined>(selectedCategory?.dishes);

  const filterPlates = (newVal: any) => {
    newVal = newVal.target.value.toLowerCase()
    setPlatesShowing(selectedCategory?.dishes.filter(dish => dish.name.toLowerCase().includes(newVal)))
  }

  useEffect(() => {
    console.log(admin)
    if (admin._id) {
      let aux: Record<string, Category> = {}
      admin.menu.forEach((categoryId => {
        console.log('getC', categoryId)
        getCategory(categoryId).then(c => {
          aux = { ...aux, [c.name]: c }
          setAllCategories(aux)
          _setSelectedCategory(c.name)
        }).catch(e => console.error(e))
      }))
      setSelectedCategory(allCategories[0])
      navigate('/application')
    }
    else {
      navigate('/')
    }
  }, [admin])

  return (
    <AdminContext.Provider value={context}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleDarkMode}>
        <MantineProvider theme={{ ...theme, colorScheme }} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider position='top-center'>
            <Routes>

              <Route path='/' element={<Login />} />

              <Route path='/application' element={
                <MenuAppShell categoryTitle={selectedCategory?.name || 'Categoría'} categoryNames={Object.keys(allCategories)}
                  setSelectedCategory={_setSelectedCategory}>
                  <Image src={selectedCategory?.bannerImg} height={230} />
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
                      {platesShowing?.map(plate => <PlateCard plate={plate} />)}
                      <EmptyCard />
                    </SimpleGrid>
                  </Stack>
                </MenuAppShell>} />

            </Routes>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </AdminContext.Provider>
  )
}

export default App
