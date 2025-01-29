import aks from './assets/404.png'
import {Link} from 'react-router-dom'
const Notfound = () => {
  return (
    <div>
        <img src={aks} alt="" style={{width:"100%"}} />

        <Link to="/home">
            برگشت به صفحه اصلی
        </Link>
    </div>
  )
}

export default Notfound