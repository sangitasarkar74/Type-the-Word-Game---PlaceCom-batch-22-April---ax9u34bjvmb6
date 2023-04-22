import React, { useState, useEffect } from "react";
import "../styles/App.css";

const WORD_LIST = ["apple", "banana", "cherry", "grape", "orange"];

function App() {
  const [word, setWord] = useState(WORD_LIST[0]);
  const [flashWord, setFlashWord] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [index, setIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
      // setWord(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userInput === word) {
      console.log("won");
      setFlashWord("You Won!");
    } else {
      console.log("lost");
      setFlashWord("You Lost!");
    }
  };
  return (
    <div className="mini-game-container">
      <h2 className="mini-game-title">Mini Game</h2>
      <p
        className="mini-game-word"
        style={{ display: setShowForm ? "none" : "block" }}
      >
        {word}
      </p>
      {setShowForm && (
        <form className="mini-game-form" onSubmit={handleFormSubmit}>
          <input
            className="mini-game-input"
            type="text"
            value={userInput}
            onChange={handleInputChange}
          />
          <button className="mini-game-button" type="submit">
            Check Answer
          </button>
        </form>
      )}
      <p>{flashWord}</p>
      {result && (
        <>
          <p class="mini-game-result">{result}</p>
          <button class="mini-game-restart-button" onClick={handleRestartClick}>
            Restart
          </button>
        </>
      )}
    </div>
  );
}

export default App;
