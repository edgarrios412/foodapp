import style from "./Cards.module.css"
import Card from "../Card/Card"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {filterRecipes, paginationRecipes} from "../../redux/actions";

const Cards = () => {
  const page = useSelector(store => store.page)
  const pagination = useSelector(store => store.pagination)
  const filterRecipe = useSelector(store => store.filterRecipes)
  const dispatch = useDispatch()
  const [sms, setSms] = useState(false)
  
  useEffect(() => {
      dispatch(paginationRecipes(page))// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterRecipe]);

  useEffect(() => {
    setTimeout(() => {
      if(!pagination.length){
        setSms(true)
      }
    },3000)
      setSms(false)
  },[pagination])

  const cleanFilter = () => {
    dispatch(filterRecipes("all"))
  }

  return(
    <div className={style.container}>
      {
        pagination?.length ?
        pagination.map(receta => {
          return(
            <Card recipe={receta}/>
          )
        }):
        <>
        <div className={style.loader}/>
        { sms && <><h4 className={style.nofound}>No hemos encontrado nada</h4>
        <button className={style.button} onClick={cleanFilter}>Clean Filter</button></>}
        </>
      }
    </div>
  )
};

export default Cards