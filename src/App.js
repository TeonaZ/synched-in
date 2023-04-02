import './App.css';
import { useState, useEffect } from 'react'
import fakeFetch from './utils/fakeFetch'
import Person from './components/Person'

function App() {
  let [people, setPeople] = useState([])

  useEffect(() => {
    const getPeople = async() => {
      //const result = await fetch (https://example.com)
      const result = await fakeFetch()
      setPeople(await result.json())
    }
    getPeople()
   
  }, [])
  
  return (
    <div className="people-div">
      <div className='d-flex flex-wrap'>
      { people.map(person => <Person key={person.id} person={person} />) }</div>
    </div>
    
    
  );
}

export default App;
