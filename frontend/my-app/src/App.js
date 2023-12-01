
import './App.css';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom"
import About from './Components/Pages/About.js';
import Contact from './Components/Pages/Contact.js';
import Login from './Components/Pages/Login.js';
import Register from './Components/Pages/Register.js';
import Home from './Components/Pages/Home.js';
import Layout from './Components/Layout';
const pages = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="/" element={<Home />} />,
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
)
function App() {
  return (
    <div>
      <RouterProvider router={pages}></RouterProvider>
    </div>
  );
}

export default App;
