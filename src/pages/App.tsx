import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Form from '../components/Form';
import List from '../components/List';
import { ITask } from '../types/task';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selecionado, setSelecionado] = useState<ITask>();

  function selecionaTarefa(tarefaSelecionada: ITask) {
    setSelecionado(tarefaSelecionada);
    setTasks(tarefasAnteriores => tarefasAnteriores.map(task => ({
      ...task,
      selecionado: task.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
