
import './App.css';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom"
import About from './Components/Pages/About.js';
import Contact from './Components/Pages/Contact.js';
import Login from './Components/Pages/Login.js';
import Home from './Components/Pages/Home.js';
import Layout from './Components/Layout';
import SignUp from './Components/Pages/SignUp.js';


const pages = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="/" element={<Home />} />,
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
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
