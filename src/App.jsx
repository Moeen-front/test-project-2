import {  NavLink, Outlet } from "react-router-dom"

const App = () => {
  return (
    <div>
      <div className="Navbar" >
        <NavLink to="/home" > صفحه اصلی </NavLink>
        <NavLink to="/About" style={{width:"100px"}}> درباره ما </NavLink>
        <NavLink to="/Books"  > کتاب ها </NavLink>
      </div>
      <hr />
      <Outlet />
    </div>

  )
}

export default App