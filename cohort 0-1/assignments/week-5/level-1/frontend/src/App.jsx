import BusinessCard from './components/BusinessCard';
import CreateCardForm from './components/CreateCardForm';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cards').then(async (res) => {
      const json = await res.json();
      setCards(json.cards)
    });
  }, [cards]);

  return (
    <div className='flex-container'>
      <div>
        {cards.map((card) => {
        return (<BusinessCard
        key={card._id}
        name={card.name}
        description={card.description}
        interests={card.interests}
        linkedInUrl={card.linkedInUrl}
        twitterUrl={card.twitterUrl}
      />)
      })}
      </div>
      
      
      
      <CreateCardForm setCards={setCards}></CreateCardForm>
    </div>
  )
}

export default App
