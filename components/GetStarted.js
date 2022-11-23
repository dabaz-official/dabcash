import React from 'react'
import { useSession, signIn } from 'next-auth/react'

const GetStarted = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <a
        href="/dashboard"
        className="inline-block rounded-xl bg-violet-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-violet-600 hover:bg-violet-700 hover:ring-violet-700 transition"
      >
        Get started
        <span className="text-violet-200 ml-2" aria-hidden="true">
          &rarr;
        </span>
      </a>
    )  
  } else {
    return (
      <button
        onClick={() => signIn()}
        className="inline-block rounded-xl bg-violet-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-violet-600 hover:bg-violet-700 hover:ring-violet-700 transition"
      >
        Get started
        <span className="text-violet-200 ml-2" aria-hidden="true">
          &rarr;
        </span>
      </button>
    )
  }
}

export default GetStarted