import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
// import Layout from "./layout/Layout"
// import About from "./Pages/About"
import Home from "./Pages/Home"
// import GoIn from "./Pages/GoIn"
import Landing from "./Pages/Landing"
import FormSignin from "./components/FormSignin"
import FormSignup from "./components/FormSignup"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react"
import { auth } from "./firebase/firebaseconfig"
import Layout from "./layout/Layout"
import About from "./Pages/About"
function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <BrowserRouter>

      <Routes element={<Layout></Layout>}>

        <Route path="/" element={<Landing></Landing>} />
        <Route path="/about" element={<About></About>} />

      </Routes>

      <Routes>
        <Route path="/signin" element={user ? <Navigate to={"/home"}></Navigate> : <FormSignin></FormSignin>} />

        <Route path="/signup" element={<FormSignup></FormSignup>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>


      <ToastContainer />

    </BrowserRouter>
  )
}

export default App
