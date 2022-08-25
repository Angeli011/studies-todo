import { ITask } from '../../../types/task';
import style from './Item.module.scss';

interface Props extends ITask {
    selecionaTarefa: (tarefaSelecionada: ITask) => void
}

export default function Item(
    { 
        task, 
        time, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa 
    }: Props) {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} 
        onClick={() => selecionaTarefa(
            {
                task,
                time,
                selecionado,
                completado,
                id
            }
        )}
        >
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}