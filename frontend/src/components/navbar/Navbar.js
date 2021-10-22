import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = ({navItems}) => {
    return ( 

        <div className="navbar">
            <ul>
                {navItems.map((item, index) => {
                   return <Link to={item.path} className={item.cName} key={index}><li>{item.title}</li></Link>
                })}
            </ul>

        </div>

     );
}
 
export default Navbar;