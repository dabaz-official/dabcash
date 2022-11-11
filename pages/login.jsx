import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Login = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        <p>
          Welcome, {session.user.name}
        </p>
        <button
          onClick={() => signOut()}
          className=""
        >
          Sign out
        </button>
      </div>
    )
  } else {
    return (
      <div>
        <p>
          You&apos;re not sign in.  
        </p>
        <button
          onClick={() => signIn()}
          className=""
        >
          Sign in
        </button>
      </div>
    )
  }
}

export default Login