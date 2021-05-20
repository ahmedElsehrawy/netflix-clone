import React, { useState, useEffect } from "react";
import instance from "./axios";
import "./Banner.css";
import requests from "./requests";

const baseImageUrl = "https://image.tmdb.org/t/p/original/";

function Header() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      const randomNumber = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomNumber]);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div
      className="header"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url(${baseImageUrl}${movie?.backdrop_path})`,
      }}
    >
      <div className="header__content">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
        <p>{movie?.overview}</p>
      </div>
    </div>
  );
}

export default Header;
