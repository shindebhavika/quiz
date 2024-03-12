import React, { useContext, useEffect, useState } from "react";
import PLayQuizLanding from "./PLayQuizLanding";
import PlayQuizContainer from "./PlayQuizContainer";
import QuizContext from "../data/QuizContext";

function PlayQuiz() {
 
  const [isOpen, setIsOpen] = useState(true);
  

  

  return (
    <>
      <PLayQuizLanding  isOpen={isOpen} setIsOpen={setIsOpen} />

  
    </>
  );
}

export default PlayQuiz;
