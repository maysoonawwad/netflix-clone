import React from 'react';
import Banner from './Banner';
import "./HomeScreen.css"
import Nav from './Nav';
import requests from "./requests"
import Rows from './Rows';
function HomeScreen() {
    
  return <div className='homescreen'>
   <Nav />
   <Banner />
   <Rows title='NETFLIX ORGINAL' fetchUrl = {requests.fetchNetflixOriginal} isLargRow={true} />
   <Rows title='Trending NowL' fetchUrl = {requests.fetchTrending} isLargRow={false} />
   <Rows title='Top Rated' fetchUrl = {requests.fetchTopRated} isLargRow={false} />
   <Rows title='Action Movies' fetchUrl = {requests.fetchActionMovies} isLargRow={false} />
   <Rows title='Comedy Movies' fetchUrl = {requests.fetchComedyMovies} isLargRow={false} />
   <Rows title='Romance Movie' fetchUrl = {requests.fetchRomanceMovies} isLargRow={false} />
   <Rows title=' Horror Movies' fetchUrl = {requests.fetchHorrorMovies} isLargRow={false} />
   <Rows title=' Documentaries' fetchUrl = {requests.fetchDocumentaries} isLargRow={false} />


  </div>;
}

export default HomeScreen;
