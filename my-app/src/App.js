import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './Pages/Home'
import ProtectedRoutes from './Services/ProtectedRoutes'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register'element={<Signup/>}/>
        <Route path='/' element={<ProtectedRoutes/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
