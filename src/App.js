import { ChakraProvider } from '@chakra-ui/react'
import routers from '@/router'
import { RouterProvider } from 'react-router-dom'
import theme from '@/config/theme'
import '@/css/normalize.scss'
import '@/assets/icons/index'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={routers} />
    </ChakraProvider>
  )
}

export default App
