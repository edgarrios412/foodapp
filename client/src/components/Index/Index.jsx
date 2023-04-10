import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Index.module.css";

const Index = () => {
  const darkRef = useRef();
  const ligthRef = useRef();
  const imgRef = useRef();
  const btnLigthRef = useRef()
  const btnDarkRef = useRef()
  const textRef = useRef()
  const textRef2 = useRef()
  const navigate = useNavigate()

  const setMode = (boolean) => {
    if (boolean) {
      let ligth = ligthRef.current;
      ligth.style.width = "0%";
      setTimeout(() => {
        navigate("/register")
      },1500)
    } else {
      let dark = darkRef.current;
      dark.style.width = "0%";
      setTimeout(() => {
        navigate("/login")
      },1500)
    }
    let img = imgRef.current;
    let btnLigth = btnLigthRef.current;
    let btnDark = btnDarkRef.current;
    let text = textRef.current;
    let text2 = textRef2.current;
    btnLigth.style.opacity= "0"
    btnDark.style.opacity= "0"
    img.style.transition = ".8s";
    img.style.marginTop = "300px";
    img.style.opacity = "0";
    text.style.transition="1s"
    text.style.opacity="0";
    text2.style.transition="1s"
    text2.style.opacity="0";
  };

  return (
    <div className={style.container}>
      <div className={style.claro} ref={ligthRef}>
        <div ref={textRef}>
        <h1 className={style.title4}>join and</h1>
        <h1 className={style.title3}>discover recipes</h1>
        </div>
        <button className={style.btn_oscuro} ref={btnDarkRef} onClick={() => setMode(false)}>
          Login
        </button>
      </div>
      <img className={style.img} src="./food.png" alt="food" ref={imgRef} />
      <div className={style.oscuro} ref={darkRef}>
        <div ref={textRef2}>
        <h1 className={style.title}>Are you</h1>
        <h1 className={style.title2}>hungry?</h1>
        </div>
        <button className={style.btn_claro} ref={btnLigthRef} onClick={() => setMode(true)}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Index;
