import { ITask } from '../../../types/task';
import style from '../List.module.scss';

export default function Item({ task, time, selecionado, completado, id }: ITask) {
    console.log('item atual: ', {task, time, selecionado, completado, id});
    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}