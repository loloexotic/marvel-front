import axios from "axios";
import { useEffect, useState } from "react";

const Comic = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComicData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/comics");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchComicData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      {data.results.map((comic) => {
        return (
          <article className="comics" key={comic._id}>
            <div>
              <h2>{comic.title}</h2>
            </div>
            <img
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt="comic"
            />
            <h4>{comic.description}</h4>
          </article>
        );
      })}
    </div>
  );
};

export default Comic;
