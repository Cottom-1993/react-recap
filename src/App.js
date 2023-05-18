import React from 'react'
import {useEffect,useState} from "react"
import MovieCard from './components/MovieCard'

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=965787b2"

function App() {
  // hold the value in the input box when a user types something in
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])

useEffect (() => {
  // searchFilms("James Bond")
}, [])

const searchFilms = async (title) => {
  const req = await fetch (`${API_URL}&s=${title}`)
  const res = await req.json()
  console.log(res)
  setMovies(res.Search)
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
      
      
      { movies?.length > 0
      // if the movies array is greater than zero i.E movies have been returned from our api
      ?(
        <div className='container'>
          {movies.map((movie)=> (
           <MovieCard movies={movie} />
          ))}
          </div>
          // if movies array is less than zero i.e no mvoies have been returned from our api
      ) : (
        <div className="empty">

          <h2> No movies found</h2>
          </div>
      )
      }
    </div>
  );
}

export default App;
