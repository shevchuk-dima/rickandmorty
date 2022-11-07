import React from "react";
import { useState } from "react";

export default function Pagintaion(props) {
  const [prevPage, setPrevPage] = useState(0);
  const [nextPage, setNextPage] = useState(10);
  
  const {totalPages, currentPage} = props;

  let arrPages = [];

  for (let i = 1; i <= totalPages; i++) {
    arrPages.push(i);
  }
  
  function handlerSetNextPage() {
    if((nextPage - 1)  < totalPages){
      setNextPage(nextPage + 10);
      setPrevPage(prevPage + 10);
    }
  }
  
  function handlerSetPrevPage() {
    if(prevPage - 1  >= 1){
      setNextPage(nextPage - 10);
      setPrevPage(prevPage - 10);
    }
  }

  return (
    <div className="pages-wrapper">
      <div className="pages-pagination">
        <div className="page" onClick={handlerSetPrevPage}>
          &lt;
        </div>
        {arrPages
          .filter((item) => item > prevPage && item < nextPage)
          .map((item) => (
            <div
              id={item}
              onClick={(e) => props.handlerSetCurrentPage(e.target.id)}
              className={item == currentPage ? "page page-current" : "page"}
            >
              {item}
            </div>
          ))}
        <div className="page" onClick={handlerSetNextPage}>
          &gt;
        </div>
      </div>
    </div>
  );
}
