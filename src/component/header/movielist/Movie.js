import React, { useEffect, useState, useCallback } from "react";
import Card from "../card/Card";
import "./Movie.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import API_KEY from "../../../key";

export default function Movie() {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const classValue = type ? type : "popular";

  const getData = useCallback(() => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovieList(data.results))
      .catch((err) => {
        console.log(err);
      });
  }, [type]);

  useEffect(() => {
    const idx = setTimeout(getData, 100);

    return () => {
      clearTimeout(idx);
    };
  }, [getData]);

  useEffect(() => {
    const id = setTimeout(getData, 100);

    return () => {
      clearTimeout(id);
    };
  }, [type, getData]);

  return (
    <>
      <div className="movie_list">
        <h2 className="list_title">
          <Link to="/movies/popular" id="hover" style={{ textDecoration: "none" }}>
            <span id="headtext" className={classValue === "popular" ? classValue : "none"}>
              Popular
            </span>
          </Link>
        </h2>
        <div className="list_cards">
          {movieList.map((movie) => {
            return <Card key={movie.id} movie={movie} type={type}></Card>;
          })}
        </div>
      </div>
    </>
  );
}
