import React from "react";

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;