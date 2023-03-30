import style from "./Banner.module.css"

const Banner = ({click, text1,text2, img}) => {
  return (
    <div onClick={click} className={style.banner}>
      <h3 className={style.title}>{text1}</h3>
      <h3 className={style.title1}>{text2}</h3>
      <img className={style.iconstart} src="./img/icons/start.png" alt="start"/>
    </div>
  );
};

export default Banner;
