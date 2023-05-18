import React from "react";

const MovieCard = ({movies}) => {
    return (
        <div className="movie">         
        <div>
            <p>{movies.Year}</p>
            </div>   

            <div>
                {/* if the value of movie.poster IS NOT EQUAL to N/A use the url, ELSE use the placeholder img */}
                <img src={movies.Poster !== "N/A" ? movies.Poster : "https://via.placeholder.com/400"} alt ={movies.Title}/>
            </div>

            <span>{movies.Type}</span>
            <h3>{movies.Title}</h3>
        </div>   
    )

}

export default MovieCard