import SearchBar from "../UI/SearchBar/SearchBar";
import "./MainStyle.css";
import FilterTabMain from "./FilterTab/FilterTabMain";
import Form from "../form/Form";
import { useState, useEffect } from "react";
import CardModal from "./Card/CardModal/CardModal";
import ContentTab from "./ContentTab/ContentTab";
import CardsService from "../../API/CardsService";

function Main(props) {
  const [cards, setCards] = useState([]);
  const [formActive, setFormActive] = useState(false);
  const [activeCardModal, setActiveCardModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);
  const [curCard, setCurCard] = useState({});
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [nextPage, setNextPage] = useState(10);
  let arrPages = [];

  for (let i = 1; i <= totalPages; i++) {
    arrPages.push(i);
  }

  useEffect(() => {
    props.setHeader("Main");
    setIsLoading(true);
    getCardsFromApi();
    getTotalPages();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getCardsFromApi();
  }, [currentPage]);

  async function getCardsFromApi() {
    setTimeout(async () => {
      let cardsFromApi = await CardsService.getAll(currentPage);
      setCards(cardsFromApi);
      setIsLoading(false);
    }, 1000);
  }

  async function getTotalPages() {
    setTimeout(async () => {
      let totalPages = await CardsService.getTotalPages();
      setTotalPages(totalPages);
    }, 1000);
  }

  async function search(e) {
    if (e.keyCode === 13 || e === "search") {
      setIsLoading(true);
      setCards([]);
      try {
        let resultSearch = await CardsService.searchName(props.searchText);
        setCards(resultSearch);
        setIsLoading(false);
        setErrorLoading(false);
      } catch {
        setErrorLoading(true);
        setIsLoading(false);
      }
    } else if (e === "clear") {
      getCardsFromApi();
      setErrorLoading(false);
      setIsLoading(false);
    }
  }

  async function handleOnclick(e) {
    let el = findParent(e, "card");
    let character = await CardsService.getCharacter(el.target.id);
    setCurCard(character);
    setActiveCardModal(true);
    setIsLoading(false);
    setErrorLoading(false);
  }

  const Sort = (sortName) => {
    setCards([...cards].sort((a, b) => a[sortName].localeCompare(b[sortName])));
  };

  function handlerSetCurrentPage(numberPage) {
    setCurrentPage(numberPage);
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
    <div>
      <SearchBar
        searchText={props.searchText}
        setSearchText={props.setSearchText}
        search={search}
      />
      <Form
        formActive={formActive}
        setFormActive={setFormActive}
        cards={cards}
        setCard={setCards}
      />
      <CardModal
        activeCardModal={activeCardModal}
        setActiveCardModal={setActiveCardModal}
        curCard={curCard}
      />
      <div className="content-wrapper">
        <ContentTab
          cards={cards}
          handleOnclick={handleOnclick}
          isLoading={isLoading}
          errorLoading={errorLoading}
          setFormActive={setFormActive}
        />
        <FilterTabMain sort={Sort} />
      </div>

      <div className="pages-wrapper">
        <div className="pages-pagination">
          <div className="page" onClick={handlerSetPrevPage}>&lt;</div>
          {arrPages.filter(item => item > prevPage && item < nextPage)
          .map((item) => (
            <div
              id={item}
              onClick={(e) => handlerSetCurrentPage(e.target.id)}
              className={item == currentPage ? "page page-current" : "page"}
            >
              {item}
            </div>
          ))}
          <div className="page" onClick={handlerSetNextPage}>&gt;</div>
        </div>
      </div>
    </div>
  );
}

function findParent(el, cls) {
  while (
    (el.target = el.target.parentNode) &&
    !el.target.classList.contains(cls)
  );
  return el;
}

export default Main;
