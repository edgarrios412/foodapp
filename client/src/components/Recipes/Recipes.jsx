import { useState, useEffect } from "react";
import style from "./Recipes.module.css";
import axios from "axios";
import Filter from "../Filter/Filter";
import Trending from "../Trending/Trending";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Window from "../Window/Window";
import Pagination from "../Pagination/Pagination"
import { useNavigate, useParams } from "react-router-dom";
import { getRecipes, setPage } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Recipes = () => {
  const page = useSelector(store => store.page)
  const dispatch = useDispatch()
  const pagesFilter = Math.ceil(useSelector(store => store.filterRecipes).length/10)
  const navigate = useNavigate()
  const isLogged = useSelector(store => store.isLogged)
  
  useEffect(() => { 
    if(isLogged){
      navigate("/login")
    }
    if(!pagesFilter) dispatch(getRecipes())
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
