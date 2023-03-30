import style from "./Nav.module.css"
import {Link} from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import { useDispatch } from "react-redux";
import { setLogged } from "../../redux/actions";

const Nav = () => {
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(setLogged(false))
  }

  return (
    <nav className={style.nav}>
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" className={style.img}/>
            {/* <h2 className={style.panel} onClick={() => navigate("/pin")}>Panel</h2> */}
            <div>
                <SearchBar/>
            </div>
            <div className={style.buttons}>
                <ul className={style.ul}>
                <Link to="/home" className={style.link}><li className={style.button}>INICIO</li></Link>
                <Link to="/recipe" className={style.link}><li className={style.button}>RECETAS</li></Link>
                <Link to="/crear" className={style.link}><li className={style.button}>CREAR</li></Link>
                <Link to="/" className={style.link}><li className={style.button} onClick={logout}>SALIR</li></Link>
                </ul>
            </div>
        </nav>
  );
};

export default Nav;
