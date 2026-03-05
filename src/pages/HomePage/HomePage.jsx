import { useEffect, useState } from "react";
import cls from "./HomePage.module.css";
import { API_URL } from "../../constants";
import { QuestionCardList } from "../../components/QuestionCardList";

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    try {
      const response = await fetch(`${API_URL}/react`);
      const questions = await response.json();
      console.log(questions);
      setQuestions(questions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <QuestionCardList cards={questions} />
    </>
  );
};
