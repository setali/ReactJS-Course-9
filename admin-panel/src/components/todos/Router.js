import { Routes, Route } from 'react-router-dom'
import List from './List'
import Full from './Full'

function Router () {
  return (
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/:id' element={<Full />} />
    </Routes>
  )
}

export default Router
