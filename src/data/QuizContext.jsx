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
    const currentOptions = currentQuestion.options;
  
    // Check if there are any options
    if (currentOptions.length > 0) {
      // Check if the last option is not empty
      const lastOption = currentOptions[currentOptions.length - 1];
      if (lastOption.text.trim() === "") {
        alert(" option text cannot be empty.");
        return;
      }
    }
  
    // Add a new option
    setCurrentQuestion({
      ...currentQuestion,
      options: [...currentOptions, { text: "", isCorrect: false }],
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
