import style from "./Window.module.css";

const Window = ({click}) => {
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 onClick={click}>Hola mundo</h3>
      </div>
    </div>
  );
};

export default Window;
