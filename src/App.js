import { useRef, useState } from 'react';
import './App.css';
import Card from './components/card';
import Header from './components/header';
import Overlay from './components/overlay';
import cardsData from './data/cards';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameover, setGameover] = useState(false);
  const clickedCards = useRef([]);
  const [cards, setCards] = useState(randomizeArray(cardsData))

  function randomizeArray(arr) {
    let newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }

    return newArr;
  }

  function handleClick(e, id) {
    e.preventDefault();
    if (!clickedCards.current.includes(id)) {
      clickedCards.current.push(id);
      setScore(prev => prev+1);
      setCards(prev => randomizeArray(prev));
    } else {
      setGameover(prev => !prev)
    }
  }

  function reset() {
    setScore(0);
    clickedCards.current.length = 0;
    setGameover(prev => !prev);
    setCards(prev => randomizeArray(prev));
  }
  return (
    <div className="App">
      {gameover && <Overlay handleClick={reset}/>}
      <Header score={score} bestScore={bestScore} setBestScore={setBestScore}/>
      <div className='card-container'>
        {cards.map(card => {
          return <Card imgData={card}
                       key={card.imgId}
                       handleClick={handleClick}
                  />
        })}
      </div>
      <footer>Images taken from <a href="https://logos-world.net/">Logos-world</a></footer>
    </div>
  );
}

export default App;
