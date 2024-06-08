import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Rolling from './components/Rolling';
import ShowDice from './components/ShowDice';

function App() {

  const [loading, setLoading] = useState(true);
  const [diceOne, setDiceOne] = useState(1);
  const [diceTwo, setDiceTwo] = useState(2);

  const timeout = async () => {
    setLoading(true);
    await setTimeout(() => {
      setDiceOne(getNumber());
      setDiceTwo(getNumber());
      setLoading(false);
    }, 1000);

    console.log(loading);
  }

  const getNumber = () => {
    const number = Math.floor(Math.random() * 6) + 1;
    return number;
  }

  return (
    <main className="App">
      <Button timeout={timeout} />
      <div className='dice-position'>
        {loading ? <Rolling /> : <div className='dices'> <ShowDice number={diceOne} /> <ShowDice number={diceTwo} /> </div>}
      </div>
    </main>
  );
}

export default App;
