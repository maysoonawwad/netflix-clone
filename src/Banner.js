//bcfd295e3e0c15ecb1b39edf6693ad2b
import React, { useEffect, useState } from 'react';
import "./Banner.css"
import axios from "./axios"
import requests from "./requests"
function Banner() {
    const [movie , setMovie] = useState([])
    useEffect(()=> {
      async function fetchData() {
          const request = await axios.get(requests.fetchNetflixOriginal)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
             );
                return request ; 
        }
        fetchData();
    },[])
    console.log(movie)
    function truncate(string , n) {
    return string?.length > n ? string.substr(0 , n-1) + '...' : string ;
    }
  return <header style={{
      backgroundSize : "cover",
     backgroundPosition : "center center" , 
      backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
  }} className='banner'>
   <div className='banner_content'>
     <h1 className='banner_title'>{movie?.title|| movie?.original_title }</h1>
     <div className='banner_buttons'>
       <button className='banner_button' >Play</button>
       <button className='banner_button'>My List</button>
     <h1 className='banner_description'>
       { truncate(movie?.overview ,  150)
            }
     </h1>
     

  
     </div>


   </div>
   <div className='banner__fadeBottom'/>
  </header>;
}

export default Banner;
