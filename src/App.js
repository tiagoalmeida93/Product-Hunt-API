import React, { useEffect, useState } from "react";
import "./App.css";
import emojis from "./services/Emojis.service";

function App() {
  const [data, setData] = useState([]);
  const [arrayEmoji, setArrayEmoji] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await emojis.listEmojis();
      setData(response.data);

      console.log(response.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    function convertJson() {
      let arr = [];
      for (let i in data) {
        arr.push([i, data[i]]);
      }
      setArrayEmoji(arr);
      console.log(arr);
    }
    convertJson();
  }, [data]);

  return (
    <div>
      <ul>
        {arrayEmoji.map(item => (
          <li key={item}>{item}</li>
        ))}
        <li></li>
      </ul>
      <img src="#!" className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
