import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const username =JSON.parse(localStorage.getItem("user"))
  const navigate=useNavigate()
 const handleLogout =()=>{
localStorage.removeItem("loggedin")
navigate('/login')
 }




  return (
  <>
  <h1 className='text-uppercase text-center mb-5'>Welcome</h1>
  <p>Welcome{username.name}</p>
  <div className="col-12">
          <button type="submit" className="btn btn-primary" onClick={handleLogout} >Logout</button>
        </div>
  </>
  )
}

export default Home