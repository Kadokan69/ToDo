import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { compliteTask, FilterTask } from "../../features/task/taskSlice";
import style from "./TodoList.module.css";

function TodoList() {
  const {tasks, filter} = useSelector((state: RootState) => state.TaskData);
  const dispatch = useDispatch();

  const filterTask = tasks.filter((item) => {
    switch(filter){
      case FilterTask.ACTIVE:
        return !item.done;
      case FilterTask.COMPLETED:
        return item.done;
      default:
        return item  
    }
  })

  return (
    <div>
      <ul className="flex flex-col shadow-[0_-3px_5px_-3px_rgba(0,0,0,0.1)]">
        {filterTask.map((item) => (
          <li key={item.id} className="border-b border-[#f0f0f0]">
            <div className={`${style.task} flex gap-2 p-2 items-center`}>
              <input
                type="checkbox"
                onChange={() => dispatch(compliteTask(item.id))}
                checked={item.done}
                className={`${style.input} appearance-none w-6 h-6 border-black rounded-2xl cursor-pointer`}
              />
              {!item.done ? <p>{item.text}</p> : <p className="line-through">{item.text}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
