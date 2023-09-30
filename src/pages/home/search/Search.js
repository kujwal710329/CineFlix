import React, { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
import Card from "../../../component/header/card/Card";
import { Link } from "react-router-dom";
import API_KEY from "../../../key";

export default function Search({ input }) {
  const [searchitem, setSearchitem] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilterData] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  useEffect(() => {
    setSearchitem(input + "");
  }, [input]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US`);
        console.log(res);
        setData(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchitem !== "" || searchitem !== undefined) {
      const filterItem = data.filter((search) => {
        return search.title.toLowerCase().includes(searchitem.toLowerCase());
      });
      setFilterData(filterItem);
    } else {
      setFilterData("");
    }
  }, [searchitem, data]);

  useEffect(() => {
    if (searchitem !== "" || searchitem !== undefined) {
      const filterItem = data.filter((search) => {
        return search.title.toLowerCase().startsWith(searchitem.toLowerCase());
      });
      setSearchFilter(filterItem.length > 0 ? filterItem : [{ result: "No results" }]);
    } else {
      setFilterData("");
    }
  }, [searchitem, data]);

  return (
    <>
      <div className="suggestion" id={input ? "visible" : ""}>
        {searchFilter.map((item) => {
          return (
            <div id={input && item ? "visible" : ""} className="blockSearch" key={item.id}>
              <span id="page">
                <Link to={`/movie/${item.id}`} style={{ textDecoration: "none", color: "white" }}>
                  {item.original_title ? item.original_title : item.result}
                </Link>
              </span>
            </div>
          );
        })}
      </div>
      {searchitem === "" ? <div className="searchpage">CineFlix search page</div> : ""}
      {searchitem !== "" ? (
        <div className="searchSection">
          <h2 className="searchWord">{searchitem === "" ? "" : `Movies results for  "${searchitem}"`}</h2>
          {filteredData.length > 0 ? (
            filteredData.map((item) => {
              return <Card key={item.id} movie={item}></Card>;
            })
          ) : (
            <div className="searchpage">No search results for "{searchitem}"</div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
