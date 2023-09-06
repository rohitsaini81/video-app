import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import AtomicSpinner from 'atomic-spinner'
const Details = () => {
  const parmas = useParams()
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    let uri = "https://get-movies-w63k.onrender.com/api/movie/"+parmas.id;
    axios.get(uri, { timeout: 50000 })
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  if (!movies) {
    return <div><AtomicSpinner /> <br/>Loading...</div>;
  }

const url = movies.prolink
  return (
    <div>
      <ReactPlayer 
          height={'80vh'}
          width={'100%'}
          controls={true}
          volume={7}
          
          url={url}
          onKeyPress={(event) => {
            if (event.keyCode === 32) {
              player.pause();
            }
          }}
          />
          <h3>{movies.title}</h3>
      <h6>{movies.decription}</h6>
    </div>
  );
};
export default Details