import Head from 'next/head'
import Main from 'layouts/Main'

export default function About () {
  const color = 'red'

  return (
    <Main>
      <Head>
        <title>NextJS | About Page</title>
      </Head>
      <h2 className='my-header'>About us</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa neque
        doloremque ipsam nihil aspernatur amet laborum tempore, distinctio,
        dolores architecto perspiciatis fugit alias explicabo cum eos culpa
        aliquid. Quas, assumenda
      </p>
      <style jsx>{`
        .my-header {
          color: ${color};
        }
        p {
          color: aqua;
          padding: 10px;
        }
      `}</style>
    </Main>
  )
}
