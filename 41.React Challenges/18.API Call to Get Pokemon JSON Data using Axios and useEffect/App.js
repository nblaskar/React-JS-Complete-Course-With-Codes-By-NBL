import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  useEffect(() => {
    // alert("hi");
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });
  return (
    <React.Fragment>
      <h1>
        You Selet <span style={{ color: "red" }}> {num}</span>
      </h1>
      <h1>
        My name is <span style={{ color: "red" }}> {name}</span>
      </h1>
      <h1>
        I have Moves<span style={{ color: "red" }}> {moves}</span>
      </h1>
      <select
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </React.Fragment>
  );
};
export default App;
