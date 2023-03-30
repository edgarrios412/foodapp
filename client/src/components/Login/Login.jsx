import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import axios from "axios"
import { useDispatch } from "react-redux";
import { setLogged, userLogged } from "../../redux/actions";

const Login = () => {
  const dispatch = useDispatch()
  let ojo = false
  const bgRef = useRef()
  const titleRef = useRef()
  const formRef = useRef()
  const passRef = useRef()
  const imgRef = useRef()
  const [message, setMessage] = useState(false)
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const registrarme = () => {
    formRef.current.style.opacity = 0;
    titleRef.current.style.opacity = 0;
    bgRef.current.style.backgroundColor = "#151515"
    setTimeout(() => {
      navigate("/register")
    },700)
  }

  const fn = () => {
    if (!ojo) {
      passRef.current.type = "text";
      imgRef.current.src = "./img/icons/cerrar-ojo.png";
      ojo = true;
    } else {
      passRef.current.type = "password";
      imgRef.current.src = "./img/icons/abrir-ojo.png";
      ojo = false;
    }
  };

  const handleInput = (e) => {
    const property = e.target.name;
    const value = e.target.value
    setForm({...form, [property]:value})
  };

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault()
    const {data} = await axios.post("http://localhost:3001/user/exist", form)
    console.log(data)
    if(data.username === form.username && form.password === data.password){
    dispatch(userLogged(data))
    dispatch(setLogged(true))
    navigate("/home");
    } else{
      setMessage(true)
      setForm({username: "",password:""})
      setTimeout(() => setMessage(false), 4000)
    }
  };

  return (
    <>
      <div className={style.bg} ref={bgRef}>
        <div className={style.titles} ref={titleRef}>
          <h3 className={style.title}>Login</h3>
          <h3 className={style.title1}>account</h3>
        </div>
        <div className={style.container} ref={formRef}>
          <form autocomplete="off" className={style.form}>
            <input
              className={style.input}
              type="text"
              name="username"
              value={form.username}
              onChange={handleInput}
              autoComplete="off"
              placeholder="Username"
            ></input>
            <input
              type="password"
              name="password"
              autoComplete="off"
              value={form.password}
              onChange={handleInput}
              className={style.input}
              placeholder="Password"
              ref={passRef}
            ></input>
            <img
              alt="img"
              ref={imgRef}
              onClick={fn}
              className={style.ojo}
              src="./img/icons/abrir-ojo.png"
            ></img>
            <button className={style.button} onClick={(e) => login(e)}>
              Login
            </button>
            <div className={style.loginwith}>
              <img alt="img" src="./img/icons/google.png" className={style.google}></img>
              <span className={style.texto}>Sign in with Google</span>
            </div>
            <div className={style.registro}>¿Aun no tienes cuenta?</div>
            <div className={style.registrarme} onClick={registrarme}>Registrate</div>
          </form>
        </div>
        {message && <h3 className={style.invalid}>Los datos ingresados no son validos</h3>}
      </div>
    </>
  );
};

export default Login;
