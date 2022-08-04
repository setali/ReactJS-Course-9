import axios from 'axios'
import Main from 'layouts/Main'
import Link from 'next/link'

export default function Posts ({ posts }) {
  return (
    <Main>
      <h2>Posts list</h2>
      <ol>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </Main>
  )
}

export async function getStaticProps () {
  const url = 'https://jsonplaceholder.typicode.com/posts'

  const { data: posts } = await axios(url)

  console.log(posts.length)

  return {
    props: {
      posts
    },
    revalidate: 5 // In seconds
  }
}
