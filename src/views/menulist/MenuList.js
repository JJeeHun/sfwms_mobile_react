import { Link } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import css from'./MenuList.module.css';



const MenuList = ({menus}) => {
    return (
        <div className="container">
            {menus.map( menu => <Link key={menu.title} to={menu.path}><Menu title={menu.title} /></Link>)}
        </div>   
    );
}

export default MenuList;