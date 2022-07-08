import React from "react";
import { data } from './data.js'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Main from './Components/Main'

function App() {
  const article = data.map(data => {
    return (
      <Body
        key={data.id}
        {...data}
      />
    )

  })
  return (
    <div className="App">
      <Navbar />
      <Main />
      {article}
    </div>
  );
}

export default App;
