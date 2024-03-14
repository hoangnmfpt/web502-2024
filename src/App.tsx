
import React from 'react';
import './App.css'

function App() {
  console.log(typeof React.createElement(
    "div",
    { className: "app", style: { color: "red", backgroundColor: "blue"} },
    React.createElement("h1", {className: "title"}, "Hello, World!")
  ))
    return React.createElement( 
      "div",
      { className: "app", style: { color: "red", backgroundColor: "blue"} },
      React.createElement("h1", {className: "title"}, "Hello, World!")
    );

    return (
      <div className="app" style={{color: "red"}}>
        <h1 className ="title">Hello cac ban!</h1>
        <button onClick={() => console.log("hi")}>Click Me</button>
      </div>
    )
	
}

export default App
