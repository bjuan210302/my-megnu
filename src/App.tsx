import { Title } from '@mantine/core'
import { MantineThemeOverride, MantineProvider } from '@mantine/styles'
import { useState } from 'react'
import { MenuAppShell } from './components/MenuAppShell'

function App() {
  const [count, setCount] = useState(0)

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
          },
        })
      },
    }
  }

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <MenuAppShell>
        <></>
      </MenuAppShell>
    </MantineProvider>
  )
}

export default App
