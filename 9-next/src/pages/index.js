import Head from 'next/head'
import Main from 'layouts/Main'

export default function Home () {
  return (
    <Main>
      <Head>
        <title>NextJS | Home Page</title>
      </Head>
      <h3>Welcome to NextJS</h3>
      <h4>Welcome {process.env.myName}</h4>
    </Main>
  )
}
