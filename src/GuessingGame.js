import React, { useState } from 'react';

function GuessingGame() {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);


  const handleGuess = () => {
    if (gameOver) {
      return;
    }

    const numberGuess = parseInt(guess);

    if (isNaN(numberGuess) || numberGuess < 1 || numberGuess > 100) {
      setMessage('Please enter a number between 1 and 100.');
      return;
    }

    setAttempts(attempts + 1);

    if (numberGuess === targetNumber) {
      setMessage(`Correct! You guessed the number in ${attempts + 1} attempts.`);
      setGameOver(true);
    } else if (numberGuess < targetNumber) {
      setMessage('Too low! Try again.');
    } else {
      setMessage('Too high! Try again.');
    }


    if (attempts + 1 >= 10) {
      setMessage(`Game Over! You've used all 10 attempts. The correct number was ${targetNumber}.`);
      setGameOver(true);
    }
  };


  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  
  const startNewGame = () => {
    setGuess('');
    setMessage('');
    setAttempts(0);
    setGameOver(false); 
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <p>Guess a number between 1 and 100</p>

      <input
        type="number"
        value={guess}
        onChange={handleChange}
        placeholder="Enter your guess"
        className="Guess-input"
        disabled={gameOver}
      />
      <button onClick={handleGuess} className="Guess-button" disabled={gameOver}>
        Submit Guess
      </button>

      <p>{message}</p>
      <p>Attempts: {attempts} / 10</p>

      {gameOver && (
        <button onClick={startNewGame} className="New-game-button">
          Start New Game
        </button>
      )}
    </div>
  );
}

export default GuessingGame;
