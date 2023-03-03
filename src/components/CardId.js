import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardId = ({ data }) => {
  const [characterId, setCharacterId] = useState();

  const params = useParams();
  const id = params._id;

  useEffect(() => {
    const fetchId = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/characters/:characterId${id}?`
        );
        setCharacterId(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchId();
  }, [id]);

  return !characterId ? (
    ""
  ) : (
    <div className="box-content">
      <div className="right-box">
        <img
          src={`${characterId.thumbnail.path}.${characterId.thumbnail.extension}`}
          alt=""
        />
      </div>
      <div className="left-box">
        <h1>{characterId.name}</h1>
        <h4>{characterId.description}</h4>
      </div>
    </div>
  );
};

export default CardId;
