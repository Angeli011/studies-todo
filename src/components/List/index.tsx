import { ITask } from '../../types/task';
import Item from './Item';
import style from './List.module.scss';



function List({ tasks }: { tasks: ITask[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Daily Studies</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                        key={index}        
                        {...item}
                    />
                ))}                
            </ul>
        </aside>
    )
}

export default List;