import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import MovieDetail from "./pages/home/MovieDetail/MovieDetail";
import Sticky from "react-stickynode";
import Search from "./pages/home/search/Search";
import Footer from "./component/header/footer/Footer";

export default function App() {
  const [init, setInit] = useState();

  function getValue(value) {
    setInit(value);
  }

  return (
    <>
      <div className="App">
        <Router>
          {/* stickynode library */}
          <Sticky innerZ={5000} top="#header" bottomBoundary="#body">
            <Header inputValue={getValue}></Header>
          </Sticky>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/movie/:id" element={<MovieDetail></MovieDetail>}></Route>
            <Route path="/search" element={<Search input={init}></Search>}></Route>
            <Route path="/movies/:type" element={<Home></Home>}></Route>
            <Route path="*" element={<h1>Error 404</h1>}></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </>
  );
}
