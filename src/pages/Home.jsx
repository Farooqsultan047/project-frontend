import React, { useState } from "react";
import { Link } from "react-router-dom";


function Home() {
  
  const [name, setName] = useState("");
  const [greet, setGreet] = useState("");

  const handleGreet = () => {
    if (name.trim() !== "") {
      setGreet(`Welcome, ${name}!`);
    } else {
      setGreet("Welcome to our website!");
    }
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1> React Home Page </h1>
        <p> This is a simple React application</p>
      </header>

      <section className="greet-section">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleGreet}>Click</button>
        {greet && <h2>{greet}</h2>}
      </section>

    </div>
  );
}

export default Home;
