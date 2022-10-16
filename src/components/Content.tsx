import styles from "./Content.module.css";
import { PlusCircle } from "phosphor-react";
import Task from "./Task";

export default function Content() {
  return (
    <>
      <form action="submit">
        <div className={styles.inputTask}>
          <input type="text" name="task" id="task" />
          <button>
            Criar <PlusCircle size={16} weight="bold" />
          </button>
        </div>
      </form>

      <div className={styles.containerTasks}>
        <div className={styles.info}>
          <p>
            Tarefas criadas <span>0</span>
          </p>
          <p>
            Concluídas <span>0</span>
          </p>
        </div>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </div>
    </>
  );
}
