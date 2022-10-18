import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
  onChangeIsComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({
  id,
  title,
  isComplete,
  onChangeIsComplete,
  onDeleteTask,
}: Task) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleChangeIsComplete() {
    onChangeIsComplete(id);
  }

  return (
    <div key={id} className={styles.container}>
      <label className={styles.checkboxContainer}>
        <input
          id={id}
          readOnly
          type="checkbox"
          checked={isComplete}
          onClick={handleChangeIsComplete}
        />
        <span className={styles.checkmark}></span>
      </label>
      <p className={styles.title}>{title}</p>
      <button type="button" title="Delete" onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}
