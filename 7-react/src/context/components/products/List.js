import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext'

export default function List () {
  const theme = useContext(ThemeContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios('/v1/categories/mobile-phone/search/?sort=7&page=1').then(response =>
      setProducts(response.data.data.products)
    )
  }, [])

  return (
    <div className='box' style={{ ...theme, width: '100%' }}>
      <h2>Products list</h2>
      <ol>
        {products.map(({ id, title_fa }) => (
          <li key={id}>
            <Link to={`/products/${id}`}>{title_fa}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
