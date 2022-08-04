import Main from 'layouts/Main'
import { useRouter } from 'next/router'
import axios from 'axios'
import Head from 'next/head'

export default function Post ({ post = {} }) {
  const {
    query: { id }
  } = useRouter()

  return (
    <Main>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </Main>
  )
}

export async function getStaticPaths () {
  //   const paths = [
  //     { params: { id: '1' } },
  //     { params: { id: '2' } },
  //     { params: { id: '3' } }
  //   ]

  const url = 'https://jsonplaceholder.typicode.com/posts'

  const { data: posts } = await axios(url)
  posts.length = 5

  const paths = posts.map(post => ({ params: { id: String(post.id) } }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps ({ params: { id } }) {
  console.log('getStaticProps', id)
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`

  const { data: post } = await axios(url)

  return {
    props: { post },
    revalidate: 5
  }
}
