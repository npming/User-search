import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [searchVal, setValue] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);
  console.log(data);

  return (
    <div className="App">
      <h2 className="heading">Search Celebrity</h2>
      <input
        type="search"
        placeholder="search celeb here"
        value={searchVal}
        onChange={(e) => setValue(e.target.value)}
      />
      <h2>{searchVal}</h2>
      <ul>
        {data ? (
          data
            .filter((name) =>
              name.name.first.toLowerCase().includes(searchVal.toLowerCase())
            )
            .map((user) => (
              <li className="userList" key={user.cell}>
                <div>
                  <img src={user.picture.large} />
                  <p>{user.name.first}</p>
                </div>
              </li>
            ))
        ) : (
          <h2>{"Loading...."}</h2>
        )}
      </ul>
    </div>
  );
}

export default App;
