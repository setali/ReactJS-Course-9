import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
// import random from 'lodash/random'
import 'styles/global.css'

function random (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

export default function MyApp ({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true))
    router.events.on('routeChangeComplete', () => setLoading(false))
  }, [])

  return (
    <div>
      {loading && 'Loading ....'}
      <NextNProgress />
      {/* Random: {random(1, 10)} */}
      <Component {...pageProps} />
    </div>
  )
}
