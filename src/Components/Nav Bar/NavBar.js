import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe , faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import { useContext } from 'react';
import { LanguageContext } from '../../Context/Language';
import { ThemeContext } from '../../Context/Theme';

const NavBar = () => {
    const activeStyle = ({ isActive }) => ({ color: isActive ? '#2a8854' : 'black' })
    const counter = useSelector((state) => state.cart.counter)
    const { contextLang, setContextLang } = useContext(LanguageContext)
    const { contextTheme, setContextTheme } = useContext(ThemeContext)

    const changeLang = (e) => {
        if (contextLang == 'en') setContextLang('ar')
        else setContextLang('en')
    }

    const changeTheme = (e) => {
        if (contextTheme == 'light') setContextTheme('dark')
        else setContextTheme('light')
    }

    return (
        <nav className="navbar bg-body-tertiary" style={{ padding: '0.5% 5%' }}>
            <div className="container-fluid d-flex justify-content-between">
                <NavLink to="/" style={activeStyle} className="navbar-brand fw-bold fs-4">Products App</NavLink>
                <div className='d-flex justify-content-end align-items-center'>

                    <NavLink className="nav-link active mx-2 fw-semibold" onClick={changeLang}>
                        <FontAwesomeIcon icon={faGlobe} style={{ color: "#000000", }} className='mx-1' />
                        {contextLang}</NavLink>
                    <NavLink className="nav-link active mx-2 fw-semibold" onClick={changeTheme}>
                        <FontAwesomeIcon icon={faCircleHalfStroke} style={{color: "#000000",}} />
                    </NavLink>

                    <NavLink to="/Register" style={activeStyle} className="nav-link active mx-2 fw-semibold">Register</NavLink>
                    <NavLink to="/Login" style={activeStyle} className="nav-link active fw-semibold mx-2">Login</NavLink>
                    <div className=''>
                        <NavLink to="/Cart" style={activeStyle}><FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '16px', }} /></NavLink>
                        <span className='' style={{}}>{counter == 0 ? '' : counter}</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;