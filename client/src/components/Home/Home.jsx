import style from "./Home.module.css";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import { getRecipes } from "../../redux/actions";

const Home = () => {
  const navigate = useNavigate()
  const isLogged = useSelector(store => store.isLogged)
  const dispatch = useDispatch()
  useEffect(() => {
    if(isLogged){
        navigate("/login")
    }
    dispatch(getRecipes())
  },[])

  return (
    <div className={style.ligth}>
      <div className={style.container}></div>
      <img className={style.food} src="./img/food.png" />
      {/* <h4 className={style.welcome}>Welcome Edgar!</h4> */}
      <h4 className={style.title}>EAT <span className={style.now}>NOW</span></h4>
      <h4 className={style.desc}>
      Find and discover recipes from all over the world created by people like you and interact with little chefs from all over the world
      </h4>
      <img className={style.gplay} src="./img/icons/gplay.png"/>
      <img className={style.astore} src="./img/icons/astore.png"/>
    </div>
  );
};

export default Home;
