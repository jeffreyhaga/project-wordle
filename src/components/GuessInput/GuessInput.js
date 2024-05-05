import React from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    console.log({ tentativeGuess });
    setTentativeGuess("");
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern="[a-zA-Z]{5}"
          title="5 letter word only"
          maxLength={5}
          required={true}
          disabled={gameStatus != "running"}
          value={tentativeGuess}
          onChange={(event) => {
            setTentativeGuess(event.target.value.toUpperCase());
          }}
        ></input>
      </form>
    </>
  );
}

export default GuessInput;
