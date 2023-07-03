import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import UserContext from '../../contexts/UserContext'

export default function Login() {
  const router = useRouter()
  const { setUser } = useContext(UserContext)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const credentials = {
      email: data.get('email'),
      password: data.get('password')
    }

    try {
      const response = await axios.post(
        'http://localhost:3333/signin',
        credentials
      )
      const { token } = response.data.token

      Cookies.set('token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      if (response.status === 200) {
        const userData = await axios.get('http://localhost:3333/user')
        setUser(userData.data)
        router.push('/')
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        window.alert(error.response.data)
      } else if (error.response && error.response.status === 401) {
        window.alert('Invalid email or password. Please try again.')
      } else {
        console.log(error)
      }
    }
  }

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <Box
        sx={{
          marginTop: -8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <img src="/img/preto.png" width={150} style={{ padding: '1rem' }} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/register" variant="body2">
                No have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
