import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Title from './components/Title';

function App() {

const [showEvents, setShowEvents] = useState(true)

const [events, setEvents] = useState([
  {title: "THOR: LOVE AND THUNDER (2022)" , id: 1},
  {title: "THE GRAY MAN (2022)" , id: 2},
  {title: "THE SEA BEAST (2022)" , id: 3},
  {title: "TOP GUN: MAVERICK (2022)" , id: 4},
  {title: "DOCTOR STRANGE (2022)" , id: 5},
  {title: "HUSTLE (2022)" , id: 6}
])

const handlClick = (id) => {
  setEvents((prevEvents) => {
    return prevEvents.filter((event) => {
      return id !== event.id
    })
  })
}

  return (
    <div className="App">
      <Title />

      {
        showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide</button>
        </div>
        )
      }

      {
        !showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show</button>
        </div>
        )
      }

     {
      showEvents && events.map((event, index ) => (
        <div key={event.id}>
          <h2>{index + 1} - {event.title}</h2>
          <button onClick={() => handlClick(event.id)}>Delete</button>
        </div>
      ))
     }
    </div>
  );
}

export default App;
