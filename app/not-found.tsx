import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1>Not Found</h1>
      <p>The requested page could not be found.</p>
      <Link href="/">Go back to the homepage</Link>
    </div>
  )
}

export default notFound