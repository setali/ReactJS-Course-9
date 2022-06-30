import { Route, Routes } from 'react-router-dom'
import Full from './Full'
import List from './List'
import New from './New'

export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/:id' element={<Full />} />
      <Route path='/new' element={<New />} />
    </Routes>
  )
}
