import { createContext, useState } from "react";

// Create a new context for managing quiz-related data
const QuizContext = createContext();

// Create a provider component to wrap around other components
export const QuizContextProvider = ({ children }) => {

  // Define state variables using useState hook
  const [name, setName] = useState(""); // State for storing the name
  const [currentQuestion, setCurrentQuestion] = useState({
    // State for storing the current question data
    title: "",
    question: "",
    options: [{ text: "", isCorrect: false }], // Array of options for the question
    correctAnswer: 1, // Index of the correct answer
    time: "", // Time for answering the question
  });

  // Event handler to update the title of the current question
  const handleTitleChange = (e) => {
    setCurrentQuestion({ ...currentQuestion, title: e.target.value });
  };

  // Event handler to update the question of the current question
  const handleQuestionChange = (e) => {
    setCurrentQuestion({ ...currentQuestion, question: e.target.value });
  };

  // Event handler to update the text of an option of the current question
  const handleOptionChange = (index, value) => {
    const updatedOptions = [...currentQuestion.options];
    updatedOptions[index].text = value;
    setCurrentQuestion({ ...currentQuestion, options: updatedOptions });
  };

  // Event handler to toggle the correctness of an option of the current question
  const handleCheckboxChange = (index) => {
    const updatedOptions = [...currentQuestion.options];
    updatedOptions[index].isCorrect = !updatedOptions[index].isCorrect;
    setCurrentQuestion({ ...currentQuestion, options: updatedOptions });
  };

  // Event handler to update the correct answer of the current question
  const handleCorrectAnswerChange = (e) => {
    setCurrentQuestion({
      ...currentQuestion,
      correctAnswer: parseInt(e.target.value),
    });
  };

  // Event handler to add a new option to the current question
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
    // Add a new empty option
    setCurrentQuestion({
      ...currentQuestion,
      options: [...currentOptions, { text: "", isCorrect: false }],
    });
  };

  // Event handler to delete an option from the current question
  const handleDeleteOption = (index) => {
    const updatedOptions = [...currentQuestion.options];
    updatedOptions.splice(index, 1);
    setCurrentQuestion({ ...currentQuestion, options: updatedOptions });
  };

  // Setter function to update the current question data
  const setCurrentQuestionData = (data) => {
    setCurrentQuestion(data);
  };

  // Provide the context value to its children
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

export default QuizContext; // Export the context
