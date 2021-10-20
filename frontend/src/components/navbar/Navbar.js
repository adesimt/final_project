import { Link } from 'react-router-dom'
import './Navbar.css';
import { ClientNavItems } from './NavItems';

const Navbar = () => {
    return ( 

        <div className="navbar">
            <ul>
                {ClientNavItems.map((item, index) => {
                   return <Link to={item.path} className={item.cName} key={index}><li>{item.title}</li></Link>
                })}
            </ul>

        </div>

     );
}
 
export default Navbar;