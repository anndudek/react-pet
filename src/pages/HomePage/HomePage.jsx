import { useEffect, useMemo, useRef, useState } from "react";
import cls from "./HomePage.module.css";
import { API_URL } from "../../constants";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
import { SearchInput } from "../../components/SearchInput";
import { Button } from "../../components/Button";

const DEFAULT_PER_PAGE = 10;

export const HomePage = () => {
  const [searchParams, setSearchParams] = useState(`?_page=1&_per_page=${DEFAULT_PER_PAGE}`);
  const [questions, setQuestions] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [sortSelectValue, setSortSelectValue] = useState("");
  const [countSelectValue, setCountSelectValue] = useState("");

  const controlContainersRef = useRef();

  const getActivePageNumber = () => (questions.next === null ? questions.last : questions.next - 1);

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    console.log(response);
    const questions = await response.json();
    console.log(questions);
    console.log("Hello");
    setQuestions(questions);
  });

  const cards = useMemo(() => {
    if (questions?.data) {
      if (searchValue.trim()) {
        return questions.data.filter((data) => data.question.toLowerCase().includes(searchValue.trim().toLowerCase()));
      } else {
        return questions.data;
      }
    }
    return [];
  }, [questions, searchValue]);

  const pagination = useMemo(() => {
    const totalCardsCount = questions?.pages || 0;

    return Array(totalCardsCount)
      .fill(0)
      .map((_, i) => i + 1);
  }, [questions]);

  useEffect(() => {
    getQuestions(`react${searchParams}`);
  }, [searchParams]);

  const onSearchChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const onSortSelectChangeHandler = (e) => {
    setSortSelectValue(e.target.value);

    setSearchParams(`?_page=1&_per_page=${countSelectValue}&${e.target.value}`);
  };

  const paginationHandler = (e) => {
    if (e.target.tagName === "BUTTON") {
      setSearchParams(`?_page=${e.target.textContent}&_per_page=${countSelectValue}&${sortSelectValue}`);
      controlContainersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onCountSelectChangeHandler = (e) => {
    setCountSelectValue(e.target.value);
    setSearchParams(`?_page=1&_per_page=${e.target.value}&${sortSelectValue}`);
  };

  return (
    <>
      <div className={cls.controlsContainer} ref={controlContainersRef}>
        <SearchInput value={searchValue} onChange={onSearchChangeHandler} />
        <select value={sortSelectValue} onChange={onSortSelectChangeHandler} className={cls.select}>
          <option value="">sortBy</option>
          <hr />
          <option value="_sort=level">level по возрастанию</option>
          <option value="_sort=-level">level по убыванию</option>
          <option value="_sort=completed">completed по возрастанию</option>
          <option value="_sort=-completed">completed по убыванию</option>
        </select>
        <select value={countSelectValue} onChange={onCountSelectChangeHandler} className={cls.select}>
          <option disabled>count</option>
          <hr />
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      {isLoading && <Loader />}
      {error && <p>{error}</p>}

      <QuestionCardList cards={cards} />

      {cards.length === 0 ? (
        <p className={cls.noCardsInfo}>No cards...</p>
      ) : (
        pagination.length > 1 && (
          <div className={cls.paginationContainer} onClick={paginationHandler}>
            {pagination.map((value) => {
              return (
                <Button key={value} isActive={value === getActivePageNumber()}>
                  {value}
                </Button>
              );
            })}
          </div>
        )
      )}
    </>
  );
};
