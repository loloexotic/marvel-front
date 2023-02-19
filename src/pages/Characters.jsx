// import { Slider } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
// import Pagination from "../components/Pagination";

// import { useNavigate } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState();
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const pageNumberLimit = 5;
  //   const [maxPageLimit, setMaxPageLimit] = useState(5);
  //   const [minPageLimit, setMinPageLimit] = useState(0);
  //   //   const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/characters`);
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  //   const onPageChange = (pageNumber) => {
  //     setCurrentPage(pageNumber);
  //   };
  //   const onPrevClick = () => {
  //     if ((currentPage - 1) % pageNumberLimit === 0) {
  //       setMaxPageLimit(maxPageLimit - pageNumberLimit);
  //       setMinPageLimit(minPageLimit - pageNumberLimit);
  //     }
  //     setCurrentPage((prev) => prev - 1);
  //   };

  //   const onNextClick = () => {
  //     if (currentPage + 1 > maxPageLimit) {
  //       setMaxPageLimit(maxPageLimit + pageNumberLimit);
  //       setMinPageLimit(minPageLimit + pageNumberLimit);
  //     }
  //     setCurrentPage((prev) => prev + 1);
  //   };
  //   const paginationAttributes = {
  //     currentPage,
  //     maxPageLimit,
  //     minPageLimit,
  //     response: Data,
  //   };

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <div className="search-bar">
        <input
          className="search"
          type="text"
          placeholder="Rechercher"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {data.results.map((character) => {
        return (
          <article className="characters" key={character._id}>
            <div className="characters-title">
              <h2>{character.name}</h2>
            </div>
            <img
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              alt="character"
            />
            <h4>{character.description}</h4>

            {/* <Pagination
              {...paginationAttributes}
              onPrevClick={onPrevClick}
              onNextClick={onNextClick}
              onPageChange={onPageChange}
            /> */}
          </article>
        );
      })}
    </div>
  );
};

export default Characters;
