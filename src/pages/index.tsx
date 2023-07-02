import React from 'react'
import MyDrawer from '@/components/MyDrawer'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const materialTheme = createTheme({
  palette: {
    primary: {
      main: '#FF0000'
    },
    secondary: {
      main: '#0044FF'
    }
  }
})

const HomePage: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={materialTheme}>
        <MyDrawer />
      </ThemeProvider>
    </>
  )
}

export default HomePage
