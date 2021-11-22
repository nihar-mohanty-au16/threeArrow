import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Listing.css";

function Listing() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=avengers")
      .then((res) => {
        console.log(res.data[0].show.image.medium);
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="heading">
       <h1 className = "listing">Listing</h1>
      {movies.map((post) => (
        <div
          className="card me-2"
          style={{ width: "18rem" }}
          key={post.show.id}
        >
          <div>
            <img src={post.show.image?.medium} alt="" />
          </div>

          <div className="card-header">{post.show.name}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{post.show.language}</li>
            <li className="list-group-item">{post.show.genres}</li>
            <li className="list-group-item">{post.show.runtime}</li>
            <li className="list-group-item">{post.show.premiered}</li>
            <li className="list-group-item">{post.show.country}</li>
            <li className="list-group-item">{post.show.rating.average}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Listing;
