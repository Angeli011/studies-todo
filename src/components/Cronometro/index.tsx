import Button from "../Button";
import Clock from "./Clock";
import style from "./Cronometro.module.scss";

export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Choose a task to start</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button>
                Start
            </Button>
        </div>
    )
}