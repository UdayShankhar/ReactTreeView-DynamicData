import React from "react";
import "./App.css"
import data from "./data.json"

function Node({ data, path }) {
  if (Array.isArray(data)) {
    return (
      <ul>
        {data.map((item, i) => (
          <li key={i}>
            <Node data={item} path={path + `[${i}]`} />
          </li>
        ))}
      </ul>
    );
  } else if (typeof data === "object") {
    return (
      <div>
        <ul>
          {Object.entries(data).map(([key, item]) => (
            <li key={key}>
              {typeof item === "object" && "⯈"}
              {key}: <Node data={item} path={path + `.${key}`} />
            </li>
          ))}
        </ul>
      </div>
    );
  } else return <span>{data}</span>;
}

function App() {
  return (
    <div className="App">
      <h3 style={{ marginLeft: '80px' }}>React Dynamic Tree View</h3>
      <Node data={data} path="data" />
    </div>
  );
}
export default App;
