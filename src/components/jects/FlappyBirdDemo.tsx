import React, { useState, useEffect } from 'react';
import './FlappyBirdDemo.css';

const FlappyBirdDemo = () => {
  const [birdPosition, setBirdPosition] = useState(50);
  const [gravity, setGravity] = useState(0.5);
  const [velocity, setVelocity] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [obstacles, setObstacles] = useState<number[]>([]); // Specify the type as number[]
  const gameAreaHeight = 480;

  useEffect(() => {
    if (!isGameOver) {
      const birdInterval = setInterval(() => {
        setVelocity(velocity + gravity);
        setBirdPosition(birdPosition + velocity);
        handleObstacleMovement();
        checkCollision();
      }, 20);

      document.addEventListener('keydown', jump);

      return () => {
        clearInterval(birdInterval);
        document.removeEventListener('keydown', jump);
      };
    }
  }, [birdPosition, gravity, velocity, isGameOver]);

  useEffect(() => {
    if (!isGameOver) {
      const obstacleInterval = setInterval(addObstacle, 3000); // Add new obstacles every 3 seconds
      return () => clearInterval(obstacleInterval);
    }
  }, [isGameOver]);

  const jump = (e: { keyCode: any; }) => {
    if (e.keyCode === 32) {
      setVelocity(-8);
    }
  };

  const addObstacle = () => {
    const obstacleHeight = Math.floor(Math.random() * (gameAreaHeight / 2)) + 50;
    setObstacles([...obstacles, obstacleHeight]);
  };

  const handleObstacleMovement = () => {
    setObstacles((prevObstacles) =>
      prevObstacles.map((obstacle) => obstacle - 3) // Move obstacles to the left
    );
  };

  const checkCollision = () => {
    if (birdPosition <= 0 || birdPosition >= gameAreaHeight) {
      gameOver();
    }
    for (const obstacle of obstacles) {
      if (
        birdPosition <= obstacle ||
        birdPosition >= obstacle + 100
      ) {
        continue;
      } else {
        gameOver();
      }
    }
  };

  const gameOver = () => {
    setIsGameOver(true);
    setVelocity(0);
  };

  return (
    <div className="flappy-container">
      <div
        className={`bird ${isGameOver ? 'game-over' : ''}`}
        style={{ top: `${birdPosition}px` }}
      />
      <div className="game-area" onClick={() => jump({ keyCode: 32 })}>
        {obstacles.map((obstacle, index) => (
          <div
            key={index}
            className="obstacle"
            style={{ height: `${obstacle}px` }}
          />
        ))}
        {isGameOver && <div className="game-over-text">Game Over</div>}
      </div>
    </div>
  );
};

export default FlappyBirdDemo;
