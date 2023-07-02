import { useState } from 'react'
import UserContext, { User } from '../contexts/UserContext'
import { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Head>
        <title>YouTube</title>
        <link rel="shortcut icon" href="/img/preto.png" />
        <link rel="apple-touch-icon" href="/img/branco.png" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Material UI"
        />
      </Head>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default App
