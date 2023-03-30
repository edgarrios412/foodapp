import { useRef } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css"

const Card = ({recipe}) => {
  const imgRef= useRef()
  const iconRef= useRef()
  const textRef= useRef()
  const text2Ref= useRef()
  const oscurecer = (e) => {
    imgRef.current.style.filter= "brightness(0.2)"
    iconRef.current.style.opacity = "1"
    textRef.current.style.opacity = "1"
    text2Ref.current.style.opacity="1";
  }
  const aclarar = (e) => {
    imgRef.current.style.filter= "brightness(1)"
    text2Ref.current.style.opacity="0";
    iconRef.current.style.opacity = "0"
    textRef.current.style.opacity = "0"
  }

  return (
    <>
    <Link to={`/recipe/${recipe.id}`} className={style.link} onMouseOver={oscurecer} onMouseOut={aclarar}>
      <div className={style.card}>
      <h3 ref={text2Ref} className={style.title}>{recipe.title}
      </h3>
      <img ref={imgRef} className={style.img} src={recipe.image} alt="recipe"></img>
    </div>
      <img ref={iconRef} className={style.icon} src="./img/icons/heart.png"/><h1 ref={textRef} className={style.health}>{recipe.healthScore}</h1>
    </Link>
    </>
  );
};

export default Card;
