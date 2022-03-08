import axios from 'axios'
import { Link } from 'react-router-dom'




const HomePage=() =>{

  return (
    <>
    <h1>Home</h1>
    <Link children="VIP" to={'/vip'}/><br/>
    <Link children="LUX" to={'/lux'}/><br/>
    <Link children="HOME GROUND" to={'/homeground'}/><br/>
    
    </>   
  )
}

export default HomePage
