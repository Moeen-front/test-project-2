import { Link , Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <div className='Navbar'>
      <Link to="/About"> درباره ما </Link>
      <Link to="/Books"> کتاب ها </Link>
    </div>
      <hr />
      <Outlet />
    </div>
    
  )
}

export default App