import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginationRecipes, setPage } from "../../redux/actions";
import style from "./Pagination.module.css"


const Pagination = ({fn, pages}) => {

  const page = useSelector(store => store.page)
  const dispatch = useDispatch()


  const selected = (n) => {
    dispatch(setPage(n))
    dispatch(paginationRecipes(n))
  }

  return(
    <div className={style.container}>
      {pages >= 1 && <span className={page == 1 ? style.pageSelected : style.page} onClick={() => selected(1)}>1</span>}
      {pages >= 2 && <span className={page == 2 ? style.pageSelected : style.page} onClick={() => selected(2)}>2</span>}
      {pages >= 3 && <span className={page == 3 ? style.pageSelected : style.page} onClick={() => selected(3)}>3</span>}
      {pages >= 4 && <span className={page == 4 ? style.pageSelected : style.page} onClick={() => selected(4)}>4</span>}
      {pages >= 5 && <span className={page == 5 ? style.pageSelected : style.page} onClick={() => selected(5)}>5</span>}
      {pages >= 6 && <span className={page == 6 ? style.pageSelected : style.page} onClick={() => selected(6)}>6</span>}
      {pages >= 7 && <span className={page == 7 ? style.pageSelected : style.page} onClick={() => selected(7)}>7</span>}
      {pages >= 8 && <span className={page == 8 ? style.pageSelected : style.page} onClick={() => selected(8)}>8</span>}
      {pages >= 9 && <span className={page == 9 ? style.pageSelected : style.page} onClick={() => selected(9)}>9</span>}
      {pages >= 10 && <span className={page == 10 ? style.pageSelected : style.page} onClick={() => selected(10)}>10</span>}
    </div>
  )
};

export default Pagination