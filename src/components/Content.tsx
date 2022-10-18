import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./Content.module.css";

import { Clipboard, ClipboardText, PlusCircle } from "phosphor-react";
import { Task } from "./Task";

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export function Content() {
  const [completedTasks, setCompletedTasks] = useState(Number);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskTitle(event.target.value);
  }

  function createNewTask(event: FormEvent) {
    event.preventDefault();
    if (!newTaskTitle) {
      alert('Digite uma tarefa')
      return;
    }

    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      isComplete: false,
    };
    console.log(newTask);

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  }

  function handleCompletedTasks() {
    let count = 0;
    tasks.filter((task) => {
      if (task.isComplete === true) {
        count++;
      }
    });
    setCompletedTasks(count);
  }

  function changeIsComplete(id: string) {
    tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
    });
    handleCompletedTasks();
  }

  function handleDeleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });
    tasks.map((task) => {
      if (task.id === id && task.isComplete === true) {
        changeIsComplete(id);
      }
    });

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <>
      <form onSubmit={createNewTask}>
        <div className={styles.inputTask}>
          <input
            type="text"
            name="task"
            placeholder="Adicione uma nova tarefa"
            value={newTaskTitle}
            onChange={handleTextChange}
          />
          <button type="submit">
            Criar <PlusCircle size={16} weight="bold" />
          </button>
        </div>
      </form>

      <div className={styles.containerTasks}>
        <div className={styles.info}>
          <p>
            Tarefas criadas <span>{tasks.length}</span>
          </p>
          <p>
            Concluídas{" "}
            <span>
              {completedTasks} de {tasks.length}
            </span>
          </p>
        </div>
      </div>
      <div className={styles.tasksList}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              isComplete={task.isComplete}
              onChangeIsComplete={changeIsComplete}
              onDeleteTask={handleDeleteTask}
            />
          ))
        ) : (
          <div className={styles.tasksContainer}>
            <ClipboardText size={60} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
      </div>
    </>
  );
}
