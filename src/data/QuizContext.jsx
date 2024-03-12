import { createContext, useState } from "react";

const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {

 
  const [name, setName] = useState("")

  const [currentQuestion, setCurrentQuestion] = useState({
    title: "",
    question: "",
    options: [{ text: "", isCorrect: false }],
    correctAnswer: 1,
    time: "",
  });

  const handleTitleChange = (e) => {
    setCurrentQuestion({ ...currentQuestion, title: e.target.value });
  };

  const handleQuestionChange = (e) => {
    setCurrentQuestion({ ...currentQuestion, question: e.target.value });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...currentQuestion.options];
    updatedOptions[index].text = value;
    setCurrentQuestion({ ...currentQuestion, options: updatedOptions });
  };

  const handleCheckboxChange = (index) => {
    const updatedOptions = [...currentQuestion.options];
    updatedOptions[index].isCorrect = !updatedOptions[index].isCorrect;
    setCurrentQuestion({ ...currentQuestion, options: updatedOptions });
  };

  const handleCorrectAnswerChange = (e) => {
    setCurrentQuestion({
      ...currentQuestion,
      correctAnswer: parseInt(e.target.value),
    });
  };

  const handleAddOption = () => {
    setCurrentQuestion({
      ...currentQuestion,
      options: [...currentQuestion.options, { text: "", isCorrect: false }],
    });
  };

  const handleDeleteOption = (index) => {
    const updatedOptions = [...currentQuestion.options];
    updatedOptions.splice(index, 1);
    setCurrentQuestion({ ...currentQuestion, options: updatedOptions });
  };

  const setCurrentQuestionData = (data) => {
    setCurrentQuestion(data);
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        handleTitleChange,
        handleQuestionChange,
        handleOptionChange,
        handleCheckboxChange,
        handleCorrectAnswerChange,
        handleAddOption,
        handleDeleteOption,
        setCurrentQuestionData,
        name, setName
      }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
