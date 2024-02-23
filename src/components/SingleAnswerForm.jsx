import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion, clearQuestions } from "../store/questionsSlice";
import QuizContext from "../data/QuizContext";
import { FiDelete } from "react-icons/fi";
function SingleAnswerForm() {
  const {
    currentQuestion,
    handleTitleChange,
    handleQuestionChange,
    handleOptionChange,

    handleCorrectAnswerChange,
    handleAddOption,
    handleDeleteOption,
    setCurrentQuestionData,
  } = useContext(QuizContext);
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    dispatch(clearQuestions()); // Clear existing questions
    updatedQuestions.forEach((question) => dispatch(addQuestion(question))); // Add updated questions
  };
  const handleAddQuestion = () => {
    dispatch(addQuestion(currentQuestion));
    setCurrentQuestionData({
      title: "",
      question: "",
      options: [{ text: "", isCorrect: false }],
      correctAnswer: 1,
      time: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }), // Format as "12 Apr 2024, 10:30:45 AM"
    });
    console.log("add", questions);
  };

  const handleSave = () => {
    const questionsWithTime = questions.map((question) => ({
      ...question,
      time: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }), // Format as "12 Apr 2024, 10:30:45 AM"
    }));
    localStorage.setItem("questions", JSON.stringify(questionsWithTime));
    alert("Questions created successfully!");
    dispatch(clearQuestions());
    console.log("save", questions);
  };

  return (
    <div className="flex">
      {/* Left side: Form for single MCQ question */}
      <div className="max-w-lg p-4 bg-white rounded shadow mr-4 w-[50rem]">
        <label className="block mb-2 font-semibold">Title:</label>
        <input
          type="text"
          value={currentQuestion.title}
          onChange={handleTitleChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
        />

        <label className="block mb-2 font-semibold">Question:</label>
        <textarea
          value={currentQuestion.question}
          onChange={handleQuestionChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
        />

        <label className="block mb-2 font-semibold">Options:</label>
        {currentQuestion.options.map((option, index) => (
          <div key={index} className="flex mb-2">
            <input
              type="text"
              value={option.text}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="w-3/4 p-2 border rounded-l focus:outline-none focus:border-blue-500"
            />

            <button onClick={() => handleDeleteOption(index)}>
              <MdDelete style={{ color: "red", fontSize: "2rem" }} />
            </button>
          </div>
        ))}

        <label className="block mb-2 font-semibold">Correct Answer:</label>
        <select
          value={currentQuestion.correctAnswer}
          onChange={handleCorrectAnswerChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500">
          {currentQuestion.options.map((option, index) => (
            <option key={index} value={index + 1}>
              <b className="font-bold">Option {index + 1} -</b>
              <span>{option.text}</span>
            </option>
          ))}
        </select>

        <button
          onClick={handleAddOption}
          className="w-full p-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700">
          Add Option
        </button>

        <button
          onClick={handleAddQuestion}
          className="w-full p-2 mt-4 bg-green-500 text-white rounded hover:bg-green-700">
          Add Question
        </button>

        <hr className="my-4" />

        {/* Button to save questions and display modal */}
        <button
          onClick={handleSave}
          className="w-full p-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700">
          Save Questions
        </button>
      </div>

      {/* Right side: Display added questions */}
      <div className="top-3">
        {questions.map((question, index) => (
          <div key={index} className="mb-4 p-4 top-3 border rounded relative">
            <FiDelete
              style={{ color: "red", fontSize: "2rem" }}
              onClick={() => handleDeleteQuestion(index)}
              className=" absolute right-2 top-1"
            />
            <h3 className="font-semibold">Question {index + 1}:</h3>
            <p>{question.title}</p>
            <p>{question.question}</p>

            <h4 className="font-semibold">Options:</h4>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  {option.text} {option.isCorrect ? "(Correct Answer)" : ""}
                </li>
              ))}
            </ul>

            <p>Correct Answer: Option {question.correctAnswer}</p>
            <p>{question.time},</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleAnswerForm;
