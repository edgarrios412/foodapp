import style from "./Comments.module.css"
import axios from "axios"
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Comments = ({id}) => {
  const [c, setC] = useState([]);
  const ref = useRef()
  const user = useSelector(store => store.user)
  const handleKey = (e) => {
    if(e.keyCode === 13){
      axios.post("http://localhost:3001/comment/new", {text:e.target.value, recipeId:id, user:user.name})
      e.target.value = ""
      fn2()
  }
  }
  const fn2 = async () => {
    const d = await axios.get(`http://localhost:3001/comment/${id}`);
    setC(d.data);
  }

  useEffect(() => {
    fn2()// eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return(
    <div className={style.container}>
      <div className={style.commentContainer} ref={ref}>
        {
          c.map(e => {
            return(
            <div className={style.comment}>
            <div className={style.img}>{e.user[0].toUpperCase()}</div>
            <div className={style.name}>{e.user}</div>
            <div className={style.text}>{e.text}</div>
        </div>
            )
          })
        }
      </div>
      <input className={style.input} placeholder="Escribe tu comentario" onKeyDown={handleKey}/>
    </div>
  )
};

export default Comments