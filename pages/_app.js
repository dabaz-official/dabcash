import '../styles/font.css'
import '../styles/tailwind.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp