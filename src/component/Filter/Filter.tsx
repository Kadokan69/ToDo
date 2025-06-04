import { clearCompleted, FilterTask, filterTask } from "../../features/task/taskSlice";
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import style from "./Filter.module.css";

function Filter() {
  const { tasks, filter } = useSelector((state: RootState) => state.TaskData);
  const dispatch = useDispatch();

  return (
    <div className={`${style.filter} flex justify-between items-center text-xs p-2`}>
      <div>
        <p>{tasks.filter((item) => item.done === false).length} items left</p>
      </div>
      <div className="flex gap-2">
        <button
          className={filter === FilterTask.ALL ? style.active : ""}
          onClick={() => dispatch(filterTask(FilterTask.ALL))}
        >
          All
        </button>
        <button
          className={filter === FilterTask.ACTIVE ? style.active : ""}
          onClick={() => dispatch(filterTask(FilterTask.ACTIVE))}
        >
          Active
        </button>
        <button
          className={filter === FilterTask.COMPLETED ? style.active : ""}
          onClick={() => dispatch(filterTask(FilterTask.COMPLETED))}
        >
          Completed
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
      </div>
    </div>
  );
}

export default Filter;
