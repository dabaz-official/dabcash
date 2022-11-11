import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Login = () => {
  const {data: session} = useSession()

  if (session) {
    return (
      <div>
        <p>
          Welcome, {session.user.name}
        </p>
      </div>
    )
  } else {
    return (
      <div>You're not sign in.</div>
    )
  }
}