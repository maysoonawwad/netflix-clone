import React, { useEffect, useState } from 'react';
import "./Rows.css"
import axios from "./axios"
function Rows({title , fetchUrl , isLargRow}) {
  const [movie , setMovie] = useState([])
  const baseUrl = "https://image.tmdb.org/t/p/original/"
  useEffect(() => {
   async function fetchMovie() {
       const result = await axios.get(fetchUrl)
        setMovie(result.data.results)
         return result;
    }
    fetchMovie()
  },[fetchUrl])

  console.log(movie)
  return <div className='row'>
 <h2>{title}</h2>
 <div className='row_posters'>
 {movie.map(result => (
     <img
     key={result.id}
     className={`row_poster ${isLargRow && "row_posterLarge" }`}
      src={`${baseUrl}${
        isLargRow ? result.poster_path : result.backdrop_path  
     }`}
      alt={result.name}

     />
 ))}
 </div>
 
  </div>;
}

export default Rows;
