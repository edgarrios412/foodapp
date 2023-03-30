import { useEffect } from "react";
import style from "./Recipes.module.css";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination"
import { useNavigate} from "react-router-dom";
import { getRecipes} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Recipes = () => {
  const page = useSelector(store => store.page)
  const dispatch = useDispatch()
  const pagesFilter = Math.ceil(useSelector(store => store.filterRecipes).length/10)
  const navigate = useNavigate()
  const isLogged = useSelector(store => store.isLogged)
  
  useEffect(() => { 
    if(!isLogged){
      navigate("/login")
    }
    if(!pagesFilter) dispatch(getRecipes())// eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <div className={style.ligth}>
        <div className={style.dashboard}>
          <Filter page={page}/>
          <Cards page={page}/> 
          <Pagination pages={pagesFilter}/>
        </div>
      </div>
      
    </>
  );
};

export default Recipes;
