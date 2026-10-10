import React, { useEffect, useState } from 'react';


const cardImages = [
 // {"src": "/img/helmet-1.png" },
  //{"src": "/img/potion-1.png"},
 // {"src": "/img/ring-1.png"},
 // {"src": "/img/scroll-1.png"},
  //{"src": "/img/shield-1.png"},
  // {"src": "/img/sword-1.png"}
  
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍉",
  "🍍",
  "🥬",
  "🥦",
  "🥒",
  "🥕",
  "🌶️" 
]



const App = () => {


  const [cards, setCards] = useState(cardImages)
  const [clickedCards, setClickedCards] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore,setBestScore] = useState(0)
  


  const handleClick = (emoji) => {
    
    if (findElement(clickedCards, emoji)) {
      setClickedCards([])
      setBestScore(Math.max(score,bestScore))
      setScore(0)
    } else {
      setScore(score + 1)
      setClickedCards([...clickedCards,emoji])
    }

    setCards(shuffle(cards))
  }

  const shuffle = (arr) => {
    const newArr = [...arr]
    newArr.sort(() => Math.random() > 0.5 ? 1 : -1)
    return newArr
  }

  const findElement = (arr,element) => {
    for (let item of arr) {
      if (item === element)return true
    }
    return false
}

  

  return (

    <div className="App">
      <h1>Magic Match</h1>
      <button >New Game</button>   
      
      <div className='score-board'>
        <div className='score'>score: {score}</div>
        <div className='best-score'>best score: {bestScore }</div>
      </div>

      <div className='card-grid'>
      {
        cards.map((emoji) => (
          <div key={emoji} className='card' onClick={() => handleClick(emoji)}>
              {emoji}
          </div>
        ))
        }
        </div>

         
   </div>
    
    
  );
}

export default App;