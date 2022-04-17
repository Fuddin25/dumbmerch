import React from "react";

// import component Header
import Header from './components/Header'
import { 
  Login, 
  Register, 
  Product, 
  Detailproduct, 
  Profile, 
  Categorylist, 
  Editcategory, 
  Productlist, 
  Productlistdata, 
  Productlisthead, 
  Editproduct, 
  Usercomplain, 
  Admincomplain 
} from './pages'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



// create a new component here
function Component() {
  return (
    //   Code Here
   

    <div> 
  
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/detail-product" element={<Detailproduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/category-list" element={<Categorylist />} />
          <Route path="/edit-category" element={<Editcategory />} />
          <Route path="/product-list" element={<Productlist />} />
          <Route path="/edit-product" element={<Editproduct />} />
          <Route path="/user-complain" element={<Usercomplain />} />
          <Route path="/admin-complain" element={<Admincomplain />} />
        </Routes>
        
      </BrowserRouter>
      {/* <Productlisthead />
      {data.map((item) => {
        return (
          <div>
            <Productlistdata no={item.no} photo={item.photo} productname={item.productname} productdesc={item.productdesc} price={item.price} qty={item.qty} />
          </div>
        )
      })} */}

      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Product /> */}
      {/* <Detailproduct /> */}
      {/* <Profile /> */}
      {/* <Categorylist /> */}
      {/* <Editcategory /> */}
      {/* <Productlist /> */}
      {/* <Editproduct /> */}
      {/* <Admincomplain /> */}
      {/* <Usercomplain /> */}

    </div>

  );
} 

const data = [
  {
    no: 1,
    photo: 'Mouse',
    productname: 'Mouse',
    productdesc: 'lorem ipsum Mouse ...',
    price: 500.000,
    qty: 600,
  },
  {
    no: 2,
    photo: 'Keyboard',
    productname: 'Keyboard',
    productdesc: 'lorem ipsum Keyboard ...',
    price: 700.000,
    qty: 600,
  },
  {
    no: 3,
    photo: 'Bag',
    productname: 'Bag',
    productdesc: 'lorem ipsum Bag ...',
    price: 300.000,
    qty: 600,
  },
  {
    no: 4,
    photo: 'Stationary',
    productname: 'Stationary',
    productdesc: 'lorem ipsum Stationary ...',
    price: 25.000,
    qty: 600,
  },
  {
    no: 5,
    photo: 'Doll',
    productname: 'Doll',
    productdesc: 'lorem ipsum Doll ...',
    price: 125.000,
    qty: 600,
  },
  {
    no: 6,
    photo: 'Pillow',
    productname: 'Pillow',
    productdesc: 'lorem ipsum Pillow ...',
    price: 300.000,
    qty: 600,
  },
]

// Create a new component here

export default Component;
