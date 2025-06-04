import { useState, type KeyboardEvent } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/task/taskSlice";
import style from './Form.module.css'

function Form() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const hendlerSubmit = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      dispatch(
        addTask({
          id: crypto.randomUUID(),
          text: value,
          done: false,
        })
      );
      setValue("");
    }
  };

  return (
    <div>
     
      <input
        className={`${style.input} flex italic p-2 w-full outline outline-[#f0f0f0]  focus-visible:outline-[#f0f0f0]`}
        type="text"
        placeholder="new task"
        value={value}
        onKeyDown={hendlerSubmit}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      
    </div>
  );
}

export default Form;
