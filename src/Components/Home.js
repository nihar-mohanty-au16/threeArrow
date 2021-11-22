import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";


function Home() {
  let history = useNavigate();
  const listingHandler = () => {
    history("/Listing");
  };
  const YearListingHandler = () => {
    history("/YearListing");
  };
  return (
    <>
    <h1 className = "TA">Three Arrow Assignment</h1>
      <div class="home">
        <div>
          <button className="button" onClick={listingHandler}>
            Listing
          </button>
        </div>
        <div>
          {" "}
          <button className="button" onClick={YearListingHandler}>
            YearListing
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
