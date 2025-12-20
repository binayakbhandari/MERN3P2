
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import CreateProduct from './pages/create/CreateProduct'
import EditProduct from './pages/edit/EditProduct'
import SingleProduct from './pages/single/SingleProduct'
import Buy from './pages/buy/Buy'
import Contact from './pages/contact/Contact'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreateProduct />} />
          <Route path='/edit/:id' element={<EditProduct />} />
          <Route path='/book/:id' element={<SingleProduct />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
