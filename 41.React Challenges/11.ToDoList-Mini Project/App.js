import React, { useState } from "react";
import ToDoList from "./ToDoList";
const App = () => {
  const [inputItems, setInputItems] = useState();
  const itemEvent = (e) => {
    setInputItems(e.target.value);
  };

  const [items, setItems] = useState([]);
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputItems];
    });
    setInputItems("");
  };
  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <React.Fragment>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Items"
            onChange={itemEvent}
            value={inputItems}
          />
          <button onClick={listOfItems}>+</button>
          <ol>
            {items.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
};
export default App;
