import React, { Suspense } from 'react'
const Heavy = React.lazy(() => import('./Heavy'))

export default function Main () {
  return (
    <div>
      Main
      <Suspense fallback='Loading ...'>
        <Heavy />
      </Suspense>
    </div>
  )
}
