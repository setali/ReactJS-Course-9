import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import request from '../../tools/request'
import ThemeContext from '../../contexts/ThemeContext'

export default function List () {
  const theme = useContext(ThemeContext)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    request('https://jsonplaceholder.typicode.com/posts').then(response =>
      setPosts(response.data)
    )
  }, [])

  return (
    <div className='box' style={{ ...theme, width: '100%' }}>
      <h2>Post list</h2>
      <ol>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
