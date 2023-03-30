import style from "./Panel.module.css";

const Panel = () => {
  return (
    <>
      <div className={style.bg}>
        <nav className={style.nav}></nav>
        <div className={style.stadistics}>
          <div className={style.userOnCount}>
            1<div className={style.text}>ONLINE USERS</div>
          </div>
          <div className={style.userCount}>
            34
            <div className={style.text}>USERS CREATED</div>
          </div>
          <div className={style.usersBanCount}>
            3<div className={style.text}>USERS BANNED</div>
          </div>
          <div className={style.usersBanCount}>
            8<div className={style.text}>TICKETS OPEN</div>
          </div>
        </div>
        <div className={style.logContainer}>
          <img
            alt="img"
            className={style.icon}
            src={`${process.env.PUBLIC_URL}/img/icons/log.png`}
          />
          <p className={style.desc}>Activity log</p>
          <div className={style.logs}>
            <div className={style.log}>
              <div className={style.loguser}>Edgar Vilchez hace 23 minutos</div>
              <div className={style.logaction}>
                Ha intentando ingresar al admin panel (1/3)
              </div>
            </div>
            <div className={style.log}>
              <div className={style.loguser}>Edgar Vilchez hace 23 minutos</div>
              <div className={style.logaction}>
                Ha baneado a Edgar, razon: Mala conducta en comentarios
              </div>
            </div>
          </div>
        </div>
        <div className={style.ban}>
          <img
            alt="img"
            className={style.icon}
            src={`${process.env.PUBLIC_URL}/img/icons/veredict.png`}
          />
          <p className={style.desc}>Ban a user</p>
          <form>
            <input className={style.sms} placeholder="Reason" />
            <input className={style.id} placeholder="User ID" />
            <button className={style.button}>BANNED!</button>
          </form>
        </div>
        <div className={style.alert}>
          <img
            alt="img"
            className={style.icon}
            src={`${process.env.PUBLIC_URL}/img/icons/notification.png`}
          />
          <p className={style.desc}>Send alert to user or all</p>
          <form>
            <input className={style.sms} placeholder="Type SMS" />
            <input className={style.id} placeholder="User ID" />
            <button className={style.button}>SEND ALERT</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Panel;
