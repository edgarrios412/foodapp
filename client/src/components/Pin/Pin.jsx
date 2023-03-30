import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Pin.module.css";

const Pin = () => {
  const n1Ref = useRef();
  const n2Ref = useRef();
  const n3Ref = useRef();
  const n4Ref = useRef();
  const formRef= useRef();
  const navigate = useNavigate();
  const [n, setN] = useState(1);
  const [input, setInput] = useState({
    n1: "",
    n2: "",
    n3: "",
    n4: "",
  });
  const handleInput = (e) => {
    if (input[e.target.name].length >= 1) {
    } else {
      setInput({ ...input, [e.target.name]: e.target.value });
      switch (n) {
        case 1: {
          n2Ref.current.focus();
          n1Ref.current.style.borderColor = "black";
          n2Ref.current.style.borderColor = "black";
          n3Ref.current.style.borderColor = "black";
          n4Ref.current.style.borderColor = "black";
          setN(n + 1);
          break;
        }
        case 2: {
          n3Ref.current.focus();
          setN(n + 1);
          break;
        }
        case 3: {
          n4Ref.current.focus();
          setN(n + 1);
          break;
        }
        case 4: {
          const { n1, n2, n3 } = input;
          const pin = n1 + n2 + n3 + e.target.value;
          if (pin === "0412") {
            n1Ref.current.style.borderColor = "7100cc";
            n2Ref.current.style.borderColor = "7100cc";
            n3Ref.current.style.borderColor = "7100cc";
            n4Ref.current.style.borderColor = "7100cc";
            setTimeout(() => {
              navigate("/panel");
            }, 1000);
          } else {
            setTimeout(() => {
              setInput({ n1: "", n2: "", n3: "", n4: "" });
              n1Ref.current.focus();
              setN(1);
            }, 500);
            formRef.current.style.transform= "translateX(20px)"
            setTimeout(() => formRef.current.style.transform= "translateX(-20px)", 50 )
            setTimeout(() => formRef.current.style.transform= "translateX(0px)", 150 )
            n1Ref.current.style.borderColor = "red";
            n2Ref.current.style.borderColor = "red";
            n3Ref.current.style.borderColor = "red";
            n4Ref.current.style.borderColor = "red";
          }break;
        }default:{break;}
      }
    }
  };

  return (
    <>
      <div className={style.bg}>
        <div className={style.titles}>
          <h3 className={style.title}>Admin</h3>
          <h3 className={style.title1}>Panel</h3>
        </div>
        <div className={style.container} ref={formRef}>
          <input
            className={style.input}
            autoFocus
            type="password"
            name="n1"
            ref={n1Ref}
            value={input.n1}
            onChange={handleInput}
            onClick={() => {
              n1Ref.current.focus();
              setN(1);
              setInput({ n1: "", n2: "", n3: "", n4: "" });
            }}
          />
          <input
            className={style.input}
            name="n2"
            type="password"
            ref={n2Ref}
            value={input.n2}
            onChange={handleInput}
            onClick={() => {
              n1Ref.current.focus();
              setN(1);
              setInput({ n1: "", n2: "", n3: "", n4: "" });
            }}
          />
          <input
            className={style.input}
            name="n3"
            type="password"
            ref={n3Ref}
            value={input.n3}
            onChange={handleInput}
            onClick={() => {
              n1Ref.current.focus();
              setN(1);
              setInput({ n1: "", n2: "", n3: "", n4: "" });
            }}
          />
          <input
            className={style.input}
            name="n4"
            type="password"
            ref={n4Ref}
            value={input.n4}
            onChange={handleInput}
            onClick={() => {
              n1Ref.current.focus();
              setN(1);
              setInput({ n1: "", n2: "", n3: "", n4: "" });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Pin;
