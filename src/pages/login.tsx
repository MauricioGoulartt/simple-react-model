import React from 'react'
import Login from '@/components/Login'
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

const LoginPage: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={materialTheme}>
        <Login />
      </ThemeProvider>
    </>
  )
}

export default LoginPage
