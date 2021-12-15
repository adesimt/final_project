import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = ({ navItems, isTrainer}) => {
    return ( 

        <div className="navbar">
            <ul>
                {navItems.map((item, index) => {
                   return <Link to={isTrainer ? item.trainerPath : item.clientPath} className={item.cName} key={index}><li>{isTrainer ? item.titleTrainer : item.titleClient}</li></Link>
                })}
            </ul>

        </div>

     );
}
 
export default Navbar;