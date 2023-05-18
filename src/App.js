import React from 'react'
import {useEffect,useState} from "react"
import MovieCard from './components/MovieCard'

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=965787b2"

function App() {
  // hold the value in the input box when a user types something in
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])

useEffect (() => {
  searchFilms("Batman")
}, [])

const searchFilms = async (title) => {
  const req = await fetch (`${API_URL}&s=${title}`)
  const res = await req.json()
  setMovies(res.search)
}

  return (
    <div className="App">
      
      <h1> my amazing movie App</h1>

      <div className="search"> 
      <input
            placeholder="search for a film"
            onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button onClick={() => searchFilms(searchTerm)}>
            Click to search for a film
            </button>
      </div>
      { movie?.length > 0
      // if the movies array is greater than zero i.E movies have been returned from our api
      ?(
        <div className='container'>
          {movies.map((movie)=> (
            
          ))}
      )
      }
    </div>
  );
}

export default App;
