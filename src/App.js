import React, { useEffect, useState } from "react";
import "./App.css";
import emojis from "./services/Emojis.service";

function App() {
  const [dataObject, setDataObject] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await emojis.listEmojis();
      setDataObject(Object.entries(data));
    }

    fetchData();
  }, [dataObject]);

  return (
    <section className="produtos container">
      <h2 className="subtitulo">Github Emojis</h2>
      <ul className="produtos_lista">
        {dataObject.map((item) => (
          <li className="grid-1-3" key={item[0]}>
            <div className="produtos_icone">
              <img src={item[1]} alt={item[0]} width="50px" />
            </div>
            <h3>{item[0]}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
