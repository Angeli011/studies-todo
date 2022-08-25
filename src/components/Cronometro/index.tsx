import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/date";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Cronometro.module.scss";

interface Props {
    selecionado: ITask | undefined
}

export default function Cronometro({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>();
    
    useEffect(() => {
        if(selecionado?.time) {
            setTempo(tempoParaSegundos(selecionado.time))
        }        
    },[selecionado])
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Choose a task to start</p>
            Time: {tempo}
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button>
                Start
            </Button>
        </div>
    )
}