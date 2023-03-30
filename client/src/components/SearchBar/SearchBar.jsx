import style from './SearchBar.module.css';
import {useDispatch, useSelector} from "react-redux"
import { findRecipe, paginationRecipes, setPage } from '../../redux/actions';
import { useEffect, useRef } from 'react';
import {useLocation, useNavigate} from "react-router-dom"

export default function SearchBar(props) {
   const {pathname} = useLocation()
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const inputRef = useRef()
   const pagination = useSelector(store => store.pagination)
   const find = () => {
      dispatch(findRecipe(inputRef.current.value))
      if(pathname !== "/recipe"){
         navigate("/recipe")
      }
      dispatch(paginationRecipes(1))
      dispatch(setPage(1))
   }

   return (
      <div className={style.container}>
         <div className={style.containerForm}>
         <input ref={inputRef} className={style.input} type='search' placeholder='Buscar receta'/>
         <button className={style.button} onClick={find} ><img src={`${process.env.PUBLIC_URL}/lupa.png`} alt="lupa" className={style.lupa}/></button>
         </div>
      </div>
   );
}
