import { Title, Image, Input, SimpleGrid, Stack } from '@mantine/core'
import { MantineThemeOverride, MantineProvider } from '@mantine/styles'
import { IconSearch } from '@tabler/icons'
import { PlateCard } from './components/PlateCard'
import { useState } from 'react'
import { MenuAppShell } from './components/MenuAppShell'
import { testCategories, Category, Plate, categoryNames } from './model/model'

const theme: MantineThemeOverride = {
  headings: {
    fontFamily: 'Roboto, sans-serif',
  },
  colors: {
    contentBackground: ['#D8D8D8'],
  },
  fontFamily: "Open Sans, sans-serif",
  colorScheme: 'light',

  components: {
    Title: {
      styles: (theme) => ({
        root: {
          color: theme.colorScheme === 'light' ? '#585858' : 'red',
          '&:is(h1)': {
            fontFamily: 'Roboto Slab, serif',
            color: theme.colorScheme === 'light' ? 'black' : 'red',
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
  const [selectedCategory, setSelectedCategory] = useState<Category>(testCategories['Postres']);
  const _setSelectedCategory = (categoryName: string) => {
    setSelectedCategory(testCategories[categoryName])
    setPlatesShowing(testCategories[categoryName].plates)
  }
  const [platesShowing, setPlatesShowing] = useState<Plate[]>(selectedCategory.plates);
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <MenuAppShell categoryTitle={selectedCategory.name} categoryNames={categoryNames}
        setSelectedCategory={_setSelectedCategory}>
        <Image src={selectedCategory.bannerImg} height={230} />
        <Stack px='4%' py={30} sx={{ gap: 50 }} align='center'>
          <Input
            rightSection={<IconSearch />}
            variant="filled"
            placeholder="Search"
            w='45%'
          />
          <SimpleGrid cols={3} sx={{ gap: 50 }}
            breakpoints={[
              { minWidth: 500, cols: 1 },
              { minWidth: 700, cols: 2 },
              { minWidth: 1300, cols: 3 },
            ]}>
            {platesShowing.map(plate => <PlateCard plate={plate} />)}
          </SimpleGrid>
        </Stack>
      </MenuAppShell>
    </MantineProvider>
  )
}

export default App
