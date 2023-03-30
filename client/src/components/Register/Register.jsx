import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Register.module.css";
import axios from "axios"

const Register = () => {
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameRegExp = /^[a-zA-Z0-9]{3,16}$/
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    passconfirm: "",
  });
  const [step, setStep] = useState(1);
  let ojo = false;
  const navigate = useNavigate();
  const passRef = useRef();
  const imgRef = useRef();
  const bgRef = useRef();
  const formRef = useRef();
  const stepRef = useRef();
  const titleRef = useRef();

  const handleInput = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [property]: value });
  };

  const ocultar = (t1, t2) => {
      formRef.current.style.opacity = 0;
      stepRef.current.style.opacity = 0;
      titleRef.current.style.opacity = 0;
      setTimeout(() => {
        bgRef.current.style.backgroundColor = "#f5f5f5";
        setTimeout(() => {
          navigate("/login");
        }, t2);
      }, t1);
  }

  const validate = async () => {
    if (form.password === form.passconfirm) {
      ocultar(2200, 1500);
      await axios.post("http://localhost:3001/user", form)
      setStep(step + 1);
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  const fn = () => {
    if (!ojo) {
      passRef.current.type = "text";
      imgRef.current.src = "./img/icons/cerrar-ojo.png";
      ojo = true;
    } else {
      passRef.current.type = "password";
      imgRef.current.src = "./img/icons/abrir-ojo.png";
      ojo = false;
    }
  };

  const barRef = useRef();
  const step1Ref = useRef();
  const step2Ref = useRef();
  const step3Ref = useRef();
  const step4Ref = useRef();
  const step5Ref = useRef();

  const nextStep = (e) => {
    if (form[e.target.name].length > 2) {
      if (step < 5) {
        switch (step) {
          case 1: {
            step1Ref.current.style.backgroundColor = "#1c9477";
            step1Ref.current.style.color = "white";
            setStep(step + 1);
            break;
          }
          case 2: {
            if (emailRegExp.test(form[e.target.name])) {
              step2Ref.current.style.backgroundColor = "#1c9477";
            step2Ref.current.style.color = "white";
            setStep(step + 1);
            } else {
              alert('El email no es válido');
            }
            break;
          }
          case 3: {
            if (usernameRegExp.test(form[e.target.name])) {
            step3Ref.current.style.backgroundColor = "#1c9477";
            step3Ref.current.style.color = "white";
            setStep(step + 1);
            }else{
              alert('El nombre de usuario solo debe tener letras y numeros');
            }
            break;
          }
          case 4: {
            step4Ref.current.style.backgroundColor = "#1c9477";
            step4Ref.current.style.color = "white";
            setStep(step + 1);
            break;
          }
          case 5: {
          }
        }
        barRef.current.style.width = step * 100 + "px";
      }
    } else {
      alert("Completa los datos");
    }
  };

  return (
    <div className={style.bg} ref={bgRef}>
      <div className={style.titles} ref={titleRef}>
        <h3 className={style.title}>Create</h3>
        <h3 className={style.title1}>you account</h3>
      </div>
      <div ref={formRef} className={style.container}>
        {step == 1 && (
          <div className={style.form}>
            <h3 className={style.desc}>Name</h3>
            <input
              name="name"
              onChange={handleInput}
              value={form.name}
              className={style.input}
              placeholder="Type your name"
            ></input>
            <button className={style.button} name="name" onClick={nextStep}>
              Next
            </button>
          </div>
        )}
        {step == 2 && (
          <div className={style.form}>
            <h3 className={style.desc}>Email</h3>
            <input
              name="email"
              onChange={handleInput}
              value={form.email}
              className={style.input}
              placeholder="Type your email"
            ></input>
            <button className={style.button} name="email" onClick={nextStep}>
              Next
            </button>
          </div>
        )}
        {step == 3 && (
          <div className={style.form}>
            <h3 className={style.desc}>Username</h3>
            <input
              name="username"
              onChange={handleInput}
              value={form.username}
              className={style.input}
              placeholder="Type your username"
            ></input>
            <button className={style.button} name="username" onClick={nextStep}>
              Next
            </button>
          </div>
        )}
        {step == 4 && (
          <div className={style.form}>
            <h3 className={style.desc}>Password</h3>
            <input
              name="password"
              onChange={handleInput}
              value={form.password}
              className={style.input}
              placeholder="Type your password"
              type="password"
              ref={passRef}
            ></input>
            <img
              ref={imgRef}
              onClick={fn}
              className={style.ojo}
              src="./img/icons/abrir-ojo.png"
            ></img>
            <button className={style.button} name="password" onClick={nextStep}>
              Next
            </button>
          </div>
        )}
        {step == 5 && (
          <div className={style.form}>
            <h3 className={style.desc}>Confirm</h3>
            <input
              type="password"
              name="passconfirm"
              onChange={handleInput}
              value={form.passconfirm}
              className={style.input}
              placeholder="Repeat password"
              ref={passRef}
            ></input>
            <img
              ref={imgRef}
              onClick={fn}
              className={style.ojo}
              src="./img/icons/abrir-ojo.png"
            ></img>
            <button
              className={style.button}
              name="passconfirm"
              onClick={validate}
            >
              Create
            </button>
          </div>
        )}
          <div className={style.login} onClick={() => ocultar(0,500)}>Ya tengo cuenta</div>
      </div>
      {step == 6 && (
        <>
          <div className={style.containerCheck}></div>
          <div className={style.check}>
            <h3 className={style.textSuccess}>Successfull</h3>
          </div>
        </>
      )}
      <div className={style.progress} ref={stepRef}>
        <span className={style.barra}></span>
        <span className={style.barracolor} ref={barRef}></span>
        <span className={style.ptitle} ref={step1Ref}>
          1
        </span>
        <span className={style.ttitle}>Name</span>
        <span className={style.pdesc} ref={step2Ref}>
          2
        </span>
        <span className={style.temail}>Email</span>
        <span className={style.precipe} ref={step3Ref}>
          3
        </span>
        <span className={style.tusername}>Username</span>
        <span className={style.pimg} ref={step4Ref}>
          4
        </span>
        <span className={style.tpass}>Password</span>
        <span className={style.pcreate} ref={step5Ref}>
          5
        </span>
        <span className={style.tcreate}>Confirm</span>
      </div>
    </div>
  );
};

export default Register;
