// import axios from "axios";
// import { useEffect, useState } from "react";
// import Characters from "../pages/Characters";

// const Search = () => {
//   const [data, setData] = useState([]);
//   // const [search, setSearch] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/characters`);
//         console.log(response.data);
//         setData(response.data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     fetchData();
//   }, []);

//   // const searchCard = () => {
//   //   setUrl(`https://localhost:4000/characters?name=${search}`);
//   // };

//   return (
//     <nav className="search-bar">
//       <div>
//         <input
//           className="search"
//           type="text"
//           placeholder="Rechercher"
//           onChange={(e) => {
//             setSearch(e.target.value);
//           }}
//           key={searchCard}
//         />
//       </div>
//       <div className="content">
//         {!data ? <p>Not Found</p> : <Characters data={data} />}
//       </div>
//     </nav>
//   );
// };

// export default Search;
