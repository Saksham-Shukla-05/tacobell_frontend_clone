import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FindUs from "./Pages/FindUs";
import AboutUs from "./Pages/AboutUs";
import { useState, useEffect } from "react";

function App() {
  const [Open, setIsOpen] = useState(false);
  const [OpenMore, setOpenMore] = useState(false);

  useEffect(function () {
    function handleResize() {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              Open={Open}
              OpenMore={OpenMore}
              setOpenMore={setOpenMore}
              setIsOpen={setIsOpen}
            />
          }
        />
        {/* Home route */}
        <Route
          path="/find-us"
          element={
            <FindUs
              Open={Open}
              OpenMore={OpenMore}
              setOpenMore={setOpenMore}
              setIsOpen={setIsOpen}
            />
          }
        />{" "}
        {/* Find Us route */}
        <Route
          path="/AboutUs"
          element={
            <AboutUs
              Open={Open}
              OpenMore={OpenMore}
              setOpenMore={setOpenMore}
              setIsOpen={setIsOpen}
            />
          }
        />{" "}
        {/* Find Us route */}
      </Routes>
    </Router>
  );
}

export default App;
