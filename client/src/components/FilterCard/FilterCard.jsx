import style from "./FilterCard.module.css"

const FilterCard = ({src, text, fn,names}) => {
  return (
    <div className={style.cardFilter} name={names} onClick={(e) => fn(e)}>
      <img className={style.icon} name={names} src={`./img/icons/${src}`} alt="img"></img>
      <h3 className={style.texticon} name={names} >{text}</h3>
    </div>
  );
};

export default FilterCard;
