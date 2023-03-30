import style from "./Crear.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validation from "./validation";
import { getRecipes } from "../../redux/actions";

const Crear = () => {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState({ diets: [] });
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const barRef = useRef();
  const step1Ref = useRef();
  const step2Ref = useRef();
  const step3Ref = useRef();
  const step4Ref = useRef();
  const step5Ref = useRef();
  const formRef = useRef();
  const titleRef = useRef();
  const progressRef = useRef();
  const isLogged = useSelector((store) => store.isLogged);
  const [sms, setSms] = useState(false);
  const diets = useSelector((store) => store.diets);

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    if (recipe.diets.includes(e.target.name)) {
      const newArr = recipe.diets.filter((r) => r !== e.target.name);
      return setRecipe({ ...recipe, diets: newArr });
    }
    setRecipe({ ...recipe, diets: [...recipe.diets, e.target.name] });
    console.log(recipe);
  };

  const handleInput = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step < 5) {
      switch (step) {
        case 1: {
          if (!validation(recipe).title) {
            setStep(step + 1);
            setSms(false);
            step1Ref.current.style.backgroundColor = "#1c9477";
            step1Ref.current.style.color = "white";
            barRef.current.style.width = step * 100 + "px";
            break;
          }
          setSms(true);
          break;
        }
        case 2: {
          if (!validation(recipe).summary) {
            setStep(step + 1);
            setSms(false);
            step2Ref.current.style.backgroundColor = "#1c9477";
            step2Ref.current.style.color = "white";
            barRef.current.style.width = step * 100 + "px";
            break;
          }
          setSms(true);
          break;
        }
        case 3: {
          if (!validation(recipe).steps) {
            setStep(step + 1);
            setSms(false);
            step3Ref.current.style.backgroundColor = "#1c9477";
            step3Ref.current.style.color = "white";
            barRef.current.style.width = step * 100 + "px";
            break;
          }
          setSms(true);
          break;
        }
        case 4: {
          if (!validation(recipe).image) {
            setStep(step + 1);
            setSms(false);
            step4Ref.current.style.backgroundColor = "#1c9477";
            step4Ref.current.style.color = "white";
            barRef.current.style.width = step * 100 + "px";
            break;
          }
          setSms(true);
          break;
        }
        default: {

        }
      }
    }
    // setStep(step + 1);
  };

  const validate = () => {
    if (validation(recipe).diets) {
      setSms(true);
      return;
    }
    setSms(false);
    formRef.current.style.opacity = 0;
    titleRef.current.style.opacity = 0;
    progressRef.current.style.opacity = 0;
    setTimeout(() => {
      navigate("/recipe");
    }, 4000);
    setStep(step + 1);
    axios
      .post("http://localhost:3001/recipes", recipe)
      .then((data) => dispatch(getRecipes()));
  };

  return (
    <>
      <div className={style.bg}>
        <div className={style.titles} ref={titleRef}>
          <h3 className={style.title}>Create</h3>
          <h3 className={style.title1}>you recipe</h3>
        </div>
        <div className={style.container} ref={formRef}>
          {step === 1 && (
            <div className={style.form}>
              <h3 className={style.desc}>TITLE</h3>
              <input
                value={recipe.title}
                onChange={handleInput}
                name="title"
                className={style.input}
                placeholder="Type your title recipe"
              ></input>
              <button
                className={style.button}
                onClick={() => {
                  navigate("/home");
                }}
              >
                Cancel
              </button>
              <button className={style.button} onClick={nextStep}>
                Next
              </button>
              {sms && (
                <h3 className={style.validationn}>
                  {validation(recipe).title}
                </h3>
              )}
            </div>
          )}
          {step === 2 && (
            <div className={style.form}>
              <h3 className={style.desc}>SUMMARY</h3>
              <input
                value={recipe.summary}
                onChange={handleInput}
                name="summary"
                className={style.input}
                placeholder="Type recipe summary"
              ></input>
              <button
                className={style.button}
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Back
              </button>
              <button className={style.button} onClick={nextStep}>
                Next
              </button>
              {sms && (
                <h3 className={style.validationn}>
                  {validation(recipe).summary}
                </h3>
              )}
            </div>
          )}
          {step === 3 && (
            <div className={style.form}>
              <h3 className={style.desc}>STEPS</h3>
              <textarea
                onChange={handleInput}
                name="steps"
                value={recipe.steps}
                className={style.input}
                placeholder="Type recipe description"
              ></textarea>
              <h3 className={style.nota}>
                Nota: Cada step debe estar separado por una coma
              </h3>
              <button
                className={style.button}
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Back
              </button>
              <button className={style.button} onClick={nextStep}>
                Next
              </button>

              {sms && (
                <h3 className={style.validationn}>
                  {validation(recipe).steps}
                </h3>
              )}
            </div>
          )}
          {step === 4 && (
            <div className={style.form}>
              <h3 className={style.desc}>IMAGE</h3>
              <input
                value={recipe.image}
                onChange={handleInput}
                name="image"
                className={style.input}
                placeholder="Type recipe description"
              ></input>
              <button
                className={style.button}
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Back
              </button>
              <button className={style.button} onClick={nextStep}>
                Next
              </button>
              {sms && (
                <h3 className={style.validationn}>
                  {validation(recipe).image}
                </h3>
              )}
            </div>
          )}
          {step === 5 && (
            <div className={style.form}>
              <h3 className={style.desca}>DIETS</h3>
              <div className={style.row}>
                {diets.map((diet) => {
                  if(diet === "fodmap friendly") return ""
                  if(diet === "lacto ovo vegetarian") return ""
                  return (
                    <div className={style.col}>
                      <input
                        type="checkbox"
                        name={diets.indexOf(diet)+1}
                        onClick={handleChange}
                      />
                      <label>{diet}</label>
                    </div>
                  );
                })}
              </div>
              <input
                className={style.health}
                value={recipe.healthScore}
                onChange={handleInput}
                name="healthScore"
                placeholder="Health"
              />
              <button
                className={style.button}
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Back
              </button>
              <button className={style.button} onClick={validate}>
                Create
              </button>
              {sms && (
                <h3 className={style.validation}>{validation(recipe).diets}</h3>
              )}
            </div>
          )}
        </div>
        {step === 6 && (
          <>
            <div className={style.containerCheck}></div>
            <div className={style.check}>
              <h3 className={style.textSuccess}>Successfull</h3>
            </div>
          </>
        )}
        <div className={style.progress} ref={progressRef}>
          <span className={style.barra}></span>
          <span className={style.barracolor} ref={barRef}></span>
          <span className={style.ptitle} ref={step1Ref}>
            1
          </span>
          <span className={style.pdesc} ref={step2Ref}>
            2
          </span>
          <span className={style.precipe} ref={step3Ref}>
            3
          </span>
          <span className={style.pimg} ref={step4Ref}>
            4
          </span>
          <span className={style.pcreate} ref={step5Ref}>
            5
          </span>
        </div>
      </div>
    </>
  );
};

export default Crear;
