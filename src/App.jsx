import { useState } from 'react'
import './App.css'
import { puppyList } from './data.js'

function App() {

  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  function handleClick(puppy) {
    setFeatPupId(puppy.id);
    }

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup);

  return (
    <div className="App">
      <h1>Puppy List</h1>

      {/* List of Puppy Names*/}
      {
        puppies.map((puppy) => (
          <p onClick={() => handleClick(puppy)} key={puppy.id}>
            {puppy.name}
          </p>
        ))
      }
           
            {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App