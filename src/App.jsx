import { useState, useEffect } from 'react';
import SnakeBody from './components/snakebody';
import useKeyPress from './hooks/usekeypress';
import './App.css'

export default function App() {
  const [snakeLength, setSnakeLength] = useState(1);

  const [foodPosition, setFoodPostion] = useState({
    top: `${Math.floor(Math.random() * 40) * 10}px`,
    left: `${Math.floor(Math.random() * 32) * 10}px`
  });
  
  const [snakePosition, setsnakePosition] = useState({
    top: `${Math.floor(Math.random() * 40) * 10}px`,
    left: `${Math.floor(Math.random() * 32) * 10}px`
  });

  const currentTop = parseInt(snakePosition.top);
  const currentLeft = parseInt(snakePosition.left)

  const keyUp = useKeyPress("ArrowUp");
  const keyDown = useKeyPress("ArrowDown");
  const keyLeft = useKeyPress("ArrowLeft");
  const keyRight = useKeyPress("ArrowRight");

  useEffect(() => {
    if (keyLeft) {
      if(currentLeft == 0) {
        alert('Game over')
      }else{
        setsnakePosition(
          {
            top: `${currentTop}px`,
            left: `${currentLeft - 10}px`
          }
        )
      }
    }

    if(keyUp) {
      if(currentTop == 0) {
        alert('Game over')
      }else{
        setsnakePosition(
          {
            top: `${currentTop - 10}px`,
            left: `${currentLeft}px`
          }
        )
      }
    }

    if(keyDown) {
      if(currentTop == 400) {
        alert('Game over')
      }else{
        setsnakePosition(
          {
            top: `${currentTop + 10}px`,
            left: `${currentLeft}px`
          }
        )
      }
    }

    if (keyRight) {
      if(currentLeft == 320) {
        alert('Game over')
      }else{
        setsnakePosition(
          {
            top: `${currentTop}px`,
            left: `${currentLeft + 10}px`
          }
        )
      }
    }
    
    if (snakePosition.top == foodPosition.top && snakePosition.left == foodPosition.left) {
      setSnakeLength(snakeLength + 1);
      setFoodPostion({
        top: `${Math.floor(Math.random() * 40) * 10}px`,
        left: `${Math.floor(Math.random() * 32) * 10}px`
      });
    }

  }, [keyLeft, keyRight, keyUp, keyDown])

  let boxGrid = new Array(1353).fill().map((el, i) => < div key = {i} className = "table-pixel" / > );

  return (
    <div className="snake-box">
      <div className="snake-box-inner">
        <div className="snake-box-grid">
          {boxGrid}
        </div>
        <div className="snake-food" style={{ top: foodPosition.top, left: foodPosition.left }} /> 
        <SnakeBody longueur={snakeLength} positions={snakePosition} />
      </div>
    </div>
  )
}