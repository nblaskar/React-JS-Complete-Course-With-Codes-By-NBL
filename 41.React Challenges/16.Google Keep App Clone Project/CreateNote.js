import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
const CreateNote = (props) => {
  const [expend, setExpend] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const InputEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setNote((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };
  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const expandIt = () => {
    setExpend(true);
  };
  const backToNormal = () => {
    setExpend(false);
  };
  return (
    <React.Fragment>
      <div className="main_note">
        <form>
          {expend ? (
            <input
              value={note.title}
              onChange={InputEvent}
              type="text"
              name="title"
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <textarea
            value={note.content}
            onChange={InputEvent}
            rows=""
            name="content"
            column=""
            placeholder="Write a note..."
            autoComplete="off"
            onClick={expandIt}
            onDoubleClick={backToNormal}
          />
          {expend ? (
            <Button onClick={addEvent}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </React.Fragment>
  );
};
export default CreateNote;
