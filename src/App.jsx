import SnakeBody from './components/snakebody';
import { useState } from 'react';
import './App.css'

export default function App() {
  const [snakeLength, setSnakeLength] = useState(1);
  const [foodPosition, setFoodPostion] = useState({
    top: 0,
    left: 0
  });
  let boxGrid = new Array(1353).fill().map((el, i) => <div key={i} className="table-pixel" />);
  document.addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
      case 37:
        console.log('send the snake to left')
        break;
      case 38:
        console.log('send the snake to up')
        break;
      case 39:
        console.log('send the snake to right')
        break;
      case 40:
        console.log('send the snake to down')
        break;
      case 32:
        console.log('pause the game')
        break;
      default:
        e.preventDefault
        break;
    }
  });
  return (
    <div className="snake-box">
      <div className="snake-box-grid">
        {boxGrid}
      </div>
      <div className="snake-food" data-top={foodPosition.top} data-left={foodPosition.left}/>
      <SnakeBody longueur={snakeLength} />
    </div>
  )
}
