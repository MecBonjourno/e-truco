import { useState, useEffect } from 'react';
import { CARDS } from './cards.ts';

function App() {
  const [card1, setCard1] = useState('');
  const [card2, setCard2] = useState('');

  // function allCards() {
  //   // CARDS.map(card => console.log(card));
  // }

  // allCards();

  function getCard1() {
    let arrayOfCards = CARDS.map(card => card);
    return arrayOfCards[Math.floor(Math.random() * arrayOfCards.length)];
  }

  function getCard2() {
    let arrayOfCards = CARDS.map(card => card);
    return arrayOfCards[Math.floor(Math.random() * arrayOfCards.length)];
  }

  function CompareCards() {
    useEffect(() => {
      setCard1(getCard1());
      setCard2(getCard2());

      return card1, card2;
    }, []);

    if (card1.value > card2.value) {
      console.log('o 1 ganhou', card1.value, card2.value);
    } else {
      console.log('o 2 ganhou', card2.value, card1.value);
    }
  }

  CompareCards();
  // console.log(card1, card2);

  return (
    <div className="App">
      <header className="App-header">
        <p>E-Truco</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
