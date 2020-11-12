import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
const ToDoList = (props) => {
  const [line, setLine] = useState(false);
  const cutIt = () => {
    setLine(true);
  };
  return (
    <React.Fragment>
      <div className="todo_style">
        <span onClick={cutIt}>
          <DeleteIcon className="fa-times" />
        </span>
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.text}
        </li>
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
      </div>
    </React.Fragment>
  );
};
export default ToDoList;
