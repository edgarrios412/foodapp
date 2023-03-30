import style from "./Filter.module.css";
import FilterCard from "../FilterCard/FilterCard";
import { useDispatch, useSelector } from "react-redux";
import { filterRecipes, orderBy, paginationRecipes, setPage } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch()
  const diets = useSelector(store => store.diets)
  const fn = (e) => {
    dispatch(filterRecipes(e.target.name))
    dispatch(paginationRecipes(1))
    dispatch(setPage(1))
  }
  const order = (e) => {
      dispatch(orderBy(e.target.name))
      dispatch(paginationRecipes(1))
      dispatch(setPage(1))
  }
  return (
    <div className={style.filter}>
      <FilterCard src="all.png" names="all" text="all" fn={fn}/>
      {
        diets.map(diet => {
          if(diet === "lacto ovo vegetarian") return ""
          if(diet === "fodmap friendly") return ""
          return(
            <FilterCard src={`${diet}.png`} text={diet} names={diet} fn={fn}/>
          )
        })
      }
      <h3 className={style.order}>ORDER</h3>
      <h3 className={style.by}>BY</h3>
      <FilterCard src="from-a-to-z.png" names="abc" text="A-Z" fn={order}/>
      <FilterCard src="healthcare.png" names="health" text="Health" fn={order}/>
      <FilterCard src="idea.png" names="created" text="Created" fn={order}/>
    </div>
  );
};

export default Filter;
