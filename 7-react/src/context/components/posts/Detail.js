import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext'
import request from '../../tools/request'

export default function List () {
  const theme = useContext(ThemeContext)
  const [post, setPost] = useState({})

  const { id } = useParams()

  useEffect(() => {
    request(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response =>
      setPost(response.data)
    )
  }, [id])

  return (
    <div className='box' style={{ ...theme, width: '100%' }}>
      {post.title}
      <p>{post.body}</p>
    </div>
  )
}
