import React, { useState, useEffect } from "react";
import axios from "axios";

function YearListing() {
  const [year, setYear] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows/1929")
      .then((res) => {
        console.log(res.data);
        setYear(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1 className="display-6 text-center">Year Listing</h1>
      <div className="card me-2" style={{ width: "18rem" }} key={year.id}>
        <div>
          <img src={year.image?.medium} alt="" />
        </div>
        <div className="card-header">{year.name}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{year.language}</li>
          <li className="list-group-item">{year.genres}</li>
          <li className="list-group-item">{year.runtime}</li>
          <li className="list-group-item">{year.premiered}</li>
          <li className="list-group-item">{year.country}</li>
          <li className="list-group-item">{year.rating?.average}</li>
        </ul>
      </div>
    </>
  );
}

export default YearListing;
