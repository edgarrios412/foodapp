import { useNavigate } from "react-router-dom";
import style from "./Error.module.css"

const Error = () => {
  const navigate = useNavigate()
  return(
    <div className={style.bg}>
      <img className={style.error} alt="Error" src={`${process.env.PUBLIC_URL}/img/404 page.png`}></img>
      <h3 className={style.notfound}>Page not found</h3>
      <button className={style.button} onClick={() => navigate("/home")}>GO HOME</button>
    </div>
  )
};

export default Error