// import React from 'react';
// const Pagination = (props)=>{

//     const { currentPage, maxPageLimit, minPageLimit} = props;
//     const totalPages = props.response.totalPages-1;
//     const data = props.response.data;

//     const pages = [];
//     for(let i=1 ; i<=totalPages; i++){
//         pages.push(i);
//     }

//     const pageNumbers = pages.map(page => {
//         if(page <= maxPageLimit  && page > minPageLimit) {
//             return(
//         <li key={page} id={page} onClick={handlePageClick}
//             className={currentPage===page ? 'active' : null}>
//             {page}
//         </li>
//             );
//         }else{
//             return null;
//         }
//     }

//  );

//  let pageIncrementEllipses = null;
//  if(pages.length > maxPageLimit){
//      pageIncrementEllipses = <li onClick={handleNextClick}>&hellip;</li>
//  }
//  let pageDecremenEllipses = null;
//  if(minPageLimit >=1){
//      pageDecremenEllipses = <li onClick={handlePrevClick}>&hellip;</li>

//  }

//  const handlePrevClick = ()=>{
//     props.onPrevClick();
// }
// const handleNextClick = ()=>{
//     props.onNextClick();
// }
// const handlePageClick = (e)=>{
//     props.onPageChange(Number(e.target.id));
// }

//     return(
//         <div className="pageNumbers">

//         <ul>
//         <li>
//             <button onClick={handlePrevClick} disabled={currentPage === pages[0]}>Prev</button>
//         </li>
//         {pageDecremenEllipses}
//          {pageNumbers}
//         {pageIncrementEllipses}
//          <li>
//             <button onClick={handleNextClick} disabled={currentPage === pages[pages.length-1]}</button>
//         </li>

//         </ul>

//         </div>
//     )
// }
// export default Pagination;
