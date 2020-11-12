import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert("i Am Clicked");
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((currdata, indx) => {
        return indx !== id;
      });
    });
  };
  return (
    <React.Fragment>
      <Header />
      <Footer />
      <CreateNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
    </React.Fragment>
  );
};
export default App;
