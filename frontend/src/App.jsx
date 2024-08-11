import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then(response => {
        setJokes(response.data)
      })
      .catch(error => {
        console.error('Error fetching jokes: ', error)
      })
  }, []) // Add an empty dependency array to run once on mount

  return (
    <>
      <div>
        <h1>Hi, Rao Abdul Hai</h1>
        <h4>Total Jokes : {jokes.length}</h4>
        {jokes.map(joke => {
          return (
            <div key={joke.id}>
              <h2>Joke: {joke.setup}</h2>
              <p>Content: {joke.punchline}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
