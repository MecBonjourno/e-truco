import { useState, useEffect } from 'react';
import { CARDS } from './cards.ts';

function App() {
  const [pickCard1, setPickCard1] = useState();
  const [card2, setCard2] = useState('');
  const [hand1, setHand1] = useState([]);
  const [hand2, setHand2] = useState([]);

  // function PickCard({ value }) {
  //   // let arrayOfCards = CARDS.map(card => card);
  //   // return arrayOfCards[Math.floor(Math.random() * arrayOfCards.length)];
  //   console.log(pickCard1);
  //   setPickCard1(value);
  // }

  // function getCard2() {
  //   let arrayOfCards = CARDS.map(card => card);
  //   return arrayOfCards[Math.floor(Math.random() * arrayOfCards.length)];
  // }

  function getHand1() {
    let arrayOfHand = CARDS.map(card => card);
    const readyHand = [];
    const getOne = [arrayOfHand[Math.floor(Math.random() * arrayOfHand.length)]];
    const getTwo = [arrayOfHand[Math.floor(Math.random() * arrayOfHand.length)]];
    const getThree = [arrayOfHand[Math.floor(Math.random() * arrayOfHand.length)]];
    readyHand.push(getOne);
    readyHand.push(getTwo);
    readyHand.push(getThree);
    console.log('Hand 1 (for user): ' + JSON.stringify(readyHand));
    setHand1(readyHand);
    // return readyHand;
  }

  function getHand2() {
    let arrayOfHand = CARDS.map(card => card);
    const readyHand = [];
    const getOne = [arrayOfHand[Math.floor(Math.random() * arrayOfHand.length)]];
    const getTwo = [arrayOfHand[Math.floor(Math.random() * arrayOfHand.length)]];
    const getThree = [arrayOfHand[Math.floor(Math.random() * arrayOfHand.length)]];
    readyHand.push(getOne);
    readyHand.push(getTwo);
    readyHand.push(getThree);
    console.log('Hand 2 (PC):' + JSON.stringify(readyHand));
    setHand2(readyHand);
    // return readyHand;
  }

  useEffect(() => {
    getHand1();
    getHand2();
    console.log('dentro do use effect: ' + pickCard1);
  }, [pickCard1]);

  // function GiveCards() {
  //   useEffect(() => {
  //     // setCard1(getCard1());
  //     // setCard2(getCard2());
  //     // setHand1(getHand1());
  //     // setHand2(getHand2());
  //     getHand1();
  //     getHand2();
  //     console.log(hand1);
  //     console.log(hand2);
  //     return card1, card2, hand1, hand2;
  //   }, []);
  // }

  // GiveCards();

  // function CompareCards() {
  //   if (card1.value > card2.value) {
  //     console.log('o 1 ganhou', card1.value, card1.name, card2.value, card2.name);
  //   } else {
  //     console.log('o 2 ganhou', card1.value, card1.name, card2.value, card2.name);
  //   }
  //   if (card1.value === card2.value) {
  //     console.log('deu pate');
  //   }
  // }

  // CompareCards();

  const TestRender = ({ hand }) => {
    return (
      <>
        {hand.map(item =>
          item.map(item => (
            <div key={item.id}>
              <button type="button">{item.name}</button>
            </div>
          ))
        )}
      </>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>E-Truco</p>
      </header>
      <div>
        <h3>Suas Cartas</h3>
        <p>COMENTA DESCOMENTA</p>
        {hand1.map(item =>
          item.map(item => (
            <div key={item.id}>
              <button
                type="button"
                onClick={function (e) {
                  setPickCard1(item.value);
                  console.log(JSON.stringify(item));
                  console.log(item.value);
                  console.log('valor da carta: ' + JSON.stringify(pickCard1));
                }}
              >
                {item.name}
              </button>
            </div>
          ))
        )}
        {/* <TestRender hand={hand1} /> */}
      </div>
    </div>
  );
}

export default App;
