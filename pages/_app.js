import { SessionProvider } from 'next-auth/react'
import '../styles/font.css'
import '../styles/tailwind.css'

function MyApp({
  Component, 
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
