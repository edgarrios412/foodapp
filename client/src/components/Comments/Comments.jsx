import style from "./Comments.module.css"

const Comments = () => {
  return(
    <div className={style.container}>
      <div className={style.commentContainer}>
        <div className={style.comment}>
            <div className={style.img}></div>
            <div className={style.name}>Edgar Vilchez</div>
            <div className={style.text}>No me gusto la receta pudo haber estado mejor pero bueno es lo que hay</div>
        </div>
        <div className={style.comment}>
            <div className={style.img}></div>
            <div className={style.name}>Yina Garzon</div>
            <div className={style.text}>La hice y me encanto!</div>
        </div>
        <div className={style.comment}>
            <div className={style.img}></div>
            <div className={style.name}>Anonimo</div>
            <div className={style.text}>Que fea redaccion, no me gusta nada</div>
        </div>
      </div>
      <input className={style.input} placeholder="Escribe tu comentario"/>
    </div>
  )
};

export default Comments