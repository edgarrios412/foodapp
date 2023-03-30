import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Comments from "../Comments/Comments";
import axios from "axios";
import style from "./Recipe.module.css";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate()
  const fn = async () => {
    const data = await axios.get(`http://localhost:3001/recipes/${id}`);
    setRecipe(data.data);
  };

  useEffect(() => {
    fn();// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sumary = recipe?.summary?.split("<a")[0];
  return (
    <div className={style.ligth}>
      <div className={style.dashboard}>
        <div className={style.recipe}>
          <h1 className={style.title}>{recipe.title}</h1>
          <img alt="img" className={style.img} src={recipe.image}></img>
          <div className={style.creator}>
            <img alt="img" src="https://media.licdn.com/dms/image/D4E03AQFD-ODog5qEMw/profile-displayphoto-shrink_800_800/0/1679621581253?e=1685577600&v=beta&t=5hZv_gY4OjiAqJ9Apv5nDXMQt0P1QmwuCVLbUsx6Xj4" className={style.profile}></img>
            <h4 className={style.name}>Edgar Vilchez</h4>
            <span className={style.tag}>OWNER</span>
            <span className={style.viewprofile} onClick={() => navigate("/profile/1")}>View profile</span>
          </div>
          <div className={style.otherrecipes}>
            <h3 className={style.titlerecipes}>Other recipes of Edgar</h3>
            <div className={style.recipes}>
              <img alt="img"
                src="https://spoonacular.com/recipeImages/715497-556x370.jpg"
                className={style.recipeof}
              
              />
              <img alt="img"
                src="https://spoonacular.com/recipeImages/715540-556x370.jpg"
                className={style.recipeof}
              />
              <img alt="img"
                src="https://spoonacular.com/recipeImages/716330-556x370.jpg"
                className={style.recipeof}
              />
            </div>
          </div>
          <div className={style.stadistics}>
            <div className={style.stats}>
            { recipe.created === "user" && recipe.diets.map((diet) => {
                if(diet.name === "fodmap friendly") return ""
                return (
                  <img
                    src={`${process.env.PUBLIC_URL}/img/icons/${diet.name}.png`}
                    alt={diet.name}
                    className={style.icon}
                  />
                );})}
              { recipe.created === "api" && recipe.diets.map((diet) => {
                if(diet === "fodmap friendly") return ""
                return (
                  <img
                    src={`${process.env.PUBLIC_URL}/img/icons/${diet}.png`}
                    alt={diet}
                    className={style.icon}
                  />
                );})}
            </div>
            <div
              className={style.desc}
              dangerouslySetInnerHTML={{ __html: sumary }}
            ></div>
          </div>
          <div className={style.containering}>
            <h2 className={style.ingtitle}>INGREDIENTS</h2>
            <div className={style.inglist}>
              {recipe?.extendedIngredients?.map((ing) => {
                return (
                  <div className={style.ing}>
                    <img alt="img"
                      className={style.ingimg}
                      src={`https://spoonacular.com/cdn/ingredients_100x100/${ing.image}`}
                    ></img>
                    <h1 className={style.cant}>{ing.original}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className={style.loader}/>} */}
      </div>
      <div className={style.tipscontainer}>
        <h2 className={style.tips}>TIPS</h2>
        <img alt="img"
          className={style.check}
          src={`${process.env.PUBLIC_URL}/img/icons/check.png`}
        />
        <span>Lavarte las manos antes de manipular alimentos</span>
      </div>
      <div className={style.containersteps}>
        <h2 className={style.stepstitle}>STEPS</h2>
        <div className={style.steps}>
          {recipe?.analyzedInstructions &&
          recipe.analyzedInstructions.length ? (
            recipe.analyzedInstructions[0].steps.map((e) => {
              return (
                <div className={style.step}>
                  <div className={style.numcontainer}>
                    <div className={style.num}>{e.number}</div>
                  </div>
                  <div className={style.text}>{e.step}</div>
                </div>
              );
            })
          ) : (
            <h1>A</h1>
          )}
        </div>
      </div>
      <div className={style.info}>
        <Comments />
      </div>
    </div>
  );
};

export default Recipe;
