
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
          <Route path='https://book-management-brown.vercel.app/' element={<Home />} />
          <Route path='https://book-management-brown.vercel.app/create' element={<CreateProduct />} />
          <Route path='https://book-management-brown.vercel.app/edit/:id' element={<EditProduct />} />
          <Route path='https://book-management-brown.vercel.app/book/:id' element={<SingleProduct />} />
          <Route path='https://book-management-brown.vercel.app/buy' element={<Buy />} />
          <Route path='https://book-management-brown.vercel.app/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
