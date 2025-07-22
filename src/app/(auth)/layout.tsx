import {redirect} from 'next/navigation'

import {currentUser} from '@clerk/nextjs/server'

export default async function AuthLayout({children}: {children: React.ReactNode}) {
  const user = await currentUser();

  if (user) {
    redirect('/home')
  }
  return children
}
