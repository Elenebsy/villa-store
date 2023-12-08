
import './App.css';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom"
import About from './Components/Pages/About.js';
import Contact from './Components/Pages/Contact.js';
import Login from './Components/Pages/Login.js';
import Home from './Components/Pages/Home.js';
import Layout from './Components/Layout';
import SignUp from './Components/Pages/SignUp.js';
import Cart from './Components/Pages/Cart.jsx';
import Houses from './Components/Categories/Houses.jsx';
import Apartments from './Components/Categories/Apartments.jsx';


const pages = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="/" element={<Home />} />,
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Houses" element={<Houses />} />
      <Route path="/Apartments" element={<Apartments />} />
    </Route>
  )
)
function App() {
  return (
<>
      <RouterProvider router={pages}></RouterProvider>
      </> 
  );
}

export default App;
