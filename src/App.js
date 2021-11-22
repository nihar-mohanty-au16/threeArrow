// eslint-disable-next-line
import Listing from "./Components/Listing/Listing";
// eslint-disable-next-line
import YearListing from "./Components/YearListing/YearListing";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/YearListing" element={<YearListing />} />

        <Route path="/Listing" element={<Listing />} />
      </Routes>
    </div>
  );
}

export default App;
