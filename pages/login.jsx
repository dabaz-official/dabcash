import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p
          className="inline-block px-3 py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm transition"
        >
          Welcome, {session.user.name}
        </p>
        <a
          href="/dashboard"
          className="inline-block rounded-xl px-3 py-1.5 text-sm font-medium leading-6 text-white bg-violet-600 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:bg-violet-700 transition"
        >
          Dashboard
        </a>
        <button
          onClick={() => signOut()}
          className="inline-block rounded-xl px-3 py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition"
        >
          Sign out
        </button>
      </>
    )
  } else {
    return (
      <button
        onClick={() => signIn()}
        className="inline-block rounded-xl px-3 py-1.5 text-sm font-medium leading-6 text-white bg-violet-600 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:bg-violet-700 transition"
      >
        Get started
      </button>
    )
  }
}

export default Login()