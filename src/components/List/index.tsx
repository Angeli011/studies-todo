import { ITask } from '../../types/task';
import Item from './Item';
import style from './List.module.scss';

interface Props {
    tasks: ITask[],
    selecionaTarefa: (tarefaSelecionada: ITask) => void 
}

function List({ tasks, selecionaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Daily Studies</h2>
            <ul>
                {tasks.map((item) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}        
                        {...item}
                    />
                ))}                
            </ul>
        </aside>
    )
}

export default List;