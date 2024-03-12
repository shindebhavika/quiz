import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function PlayQuizContainer({ setIsOpen, name, setName }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [allQuestions, setAllQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [allSelectedOptions, setAllSelectedOptions] = useState([]);
  const [displayResult, setDisplayResult] = useState(false);

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem("questions"));

    if (storedQuestions) {
      const activeQuestions = storedQuestions.filter(
        (question) => question.status === "active"
      );

      if (activeQuestions.length > 0) {
        setAllQuestions(activeQuestions);
      } else {
        console.warn("No active questions found.");
       
      }
    }
  }, []);

  const handleOptionClick = (value) => {
    setSelectedOption(value);
  };

  const handleNextQuestionClick = () => {
    setAllSelectedOptions([...allSelectedOptions, selectedOption]);

    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(""); // Reset selected option for the next question
    } else {
      // Handle quiz completion
      setShowScore(true);
    }
  };

  const handleQuizSubmission = () => {
    setAllSelectedOptions([...allSelectedOptions, selectedOption]);
    let calculatedScore = 0;

    allSelectedOptions.forEach((selectedOption, index) => {
      const correctAnswerIndex = allQuestions[index].correctAnswer - 1;
      const selectedOptionNumber = parseInt(
        selectedOption.replace("option", ""),
        10
      );

      if (selectedOptionNumber === correctAnswerIndex + 1) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore); // Set the calculated score
    setDisplayResult(true);
  };

  return (
    <div className="fixed top-20 left-0 w-full h-full flex items-center justify-center quiz-container">
      <form className="bg-white rounded shadow-md p-8 w-[400px]">
        {allQuestions.length === 0 ? (
         <h1 className="text-red">No questions are available</h1>
        ) : showScore ? (
          <div className="text-center">
            <p className="text-xl font-semibold mb-4">Quiz Completed  ✌️</p>
            {displayResult && (
              <div>
                <img
                  src="https://img.freepik.com/free-vector/birthday-cap-with-confetti-serpentine-explosion_1017-17924.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709251200&semt=ais"
                  alt=""
                  className="h-[250px] ml-14"
                />
                <p className="text-xl font-semibold mb-4">
                  Congratulatons <span className="text-red-700 name">{name}</span>
                </p>
                <p>
                  Your Score: {score} out of {allQuestions.length}
                </p>
              </div>
            )}
            {displayResult ? (
             <div>
               <button
                type="button"
                className="px-6 py-3 bg-green-400 text-white rounded-md hover:bg-green-800 mt-4 text-[20px] quiz-options"
                onClick={() => {
                  setIsOpen(true);
                  setName("");
                }}>
                Play Again
              </button>

<Link to="/">
              <button
              type="button"
              className="px-6 py-3 bg-blue-400 text-white rounded-md hover:bg-blue-800 mt-4 text-[20px] quiz-options ml-4"
              onClick={() => {
              
              }}>
              Go Home
            </button>
            </Link>
             </div>
            ) : (
              <button
                type="button"
                className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 mt-4"
                onClick={handleQuizSubmission}>
                Submit Quiz
              </button>
            )}
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-semibold mb-4">
              Title: {allQuestions[currentQuestionIndex]?.title}
            </h1>
            <p className="mb-4">
              <span className="font-semibold">
                Question {currentQuestionIndex + 1}:
              </span>{" "}
              {allQuestions[currentQuestionIndex]?.question}
            </p>
            <div className="flex flex-col gap-4 rounded-lg question-container">
              {allQuestions[currentQuestionIndex]?.options.map(
                (option, index) => (
                  <label
                    key={index}
                    className={`flex items-center gap-2 border border-gray-900 cursor-pointer rounded-lg p-4 ring-offset-2 ring-2 ${
                      selectedOption === `option${index + 1}`
                        ? "bg-[#bcf3ddb6]"
                        : "bg-gray-100"
                    }`}>
                    <input
                      type="radio"
                      name="option"
                      value={`option${index + 1}`}
                      onChange={() => handleOptionClick(`option${index + 1}`)}
                      checked={selectedOption === `option${index + 1}`}
                    />
                    <span className="radio-dot"></span> {option.text}
                  </label>
                )
              )}
            </div>
            <button
              type="button"
              className={`px-6 py-3 ${
                selectedOption
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "bg-blue-200 text-white"
              } rounded-md mt-4`}
              onClick={handleNextQuestionClick}
              disabled={!selectedOption}>
              {currentQuestionIndex === allQuestions.length - 1
                ? "Submit Quiz"
                : "Next Question"}
            </button>
            <h1 className="font-semibold mt-4">
              Questions: {currentQuestionIndex + 1}/{allQuestions.length}
            </h1>
          </>
        )}
      </form>
    </div>
  );
}

export default PlayQuizContainer;
