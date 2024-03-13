import { useContext, useState, useEffect } from "react";
import QuizContext from "../data/QuizContext";
import { MdDelete } from "react-icons/md";

function EditModal({ editIndex, toggleEditModal, updateQuestion }) {
  const { handleDeleteOption } = useContext(QuizContext);
  const [titleError, setTitleError] = useState("");
  const [questionError, setQuestionError] = useState("");
  const [optionsError, setOptionsError] = useState("");
  const [itemAtIndex, setItemAtIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedQuestion, setEditedQuestion] = useState("");
  const [newOption, setNewOption] = useState("");

  useEffect(() => {
    const allQuestions = JSON.parse(localStorage.getItem("questions"));

    if (allQuestions && allQuestions.length > editIndex) {
      const itemIndex = allQuestions[editIndex];
      setItemAtIndex(itemIndex);
      setEditedTitle(itemIndex.title);
      setEditedQuestion(itemIndex.question);
    } else {
      console.error(
        "Unable to retrieve item at the specified index. The array may be empty or not have enough items."
      );
    }
  }, [editIndex]);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...itemAtIndex.options];
    updatedOptions[index].text = value;

    setItemAtIndex({
      ...itemAtIndex,
      options: updatedOptions,
    });
  };

  const handleDeleteOptionClick = (index) => {
    // Call the handleDeleteOption function with the index
    handleDeleteOption(index);

    // Update the itemAtIndex state with the modified options
    const updatedOptions = [...itemAtIndex.options];
    updatedOptions.splice(index, 1);

    setItemAtIndex({
      ...itemAtIndex,
      options: updatedOptions,
    });
  };

  const handleAddOptionClick = () => {
    // Perform any validation or additional logic if needed
    const updatedOptions = [...itemAtIndex.options, { text: newOption }];
    setItemAtIndex({
      ...itemAtIndex,
      options: updatedOptions,
    });

    // Clear the input field for a new option
    setNewOption("");
  };

  function handleUpdate() {
    // Retrieve all questions from local storage
    const allQuestions = JSON.parse(localStorage.getItem("questions"));

    // Check if questions exist and the editIndex is valid
    if (allQuestions && allQuestions.length > editIndex) {
      // Update the question at the specified index
      allQuestions[editIndex] = {
        ...itemAtIndex,
        title: editedTitle,
        question: editedQuestion,
      };

      // Save the updated questions back to local storage
      localStorage.setItem("questions", JSON.stringify(allQuestions));

      console.error(
        "Unable to update item at the specified index. The array may be empty or not have enough items."
      );
    }
    // Validate title and question length
    if (editedTitle.length < 10 || editedTitle.length > 30) {
      setTitleError("Title should be between 10 and 30 characters.");
      return;
    } else {
      setTitleError("");
    }

    if (editedQuestion.length < 10 || editedQuestion.length > 200) {
      setQuestionError("Question should be between 10 and 200 characters.");
      return;
    } else {
      setQuestionError("");
    }

    // Validate at least two options
    if (itemAtIndex.options.length < 2) {
      setOptionsError("At least two options required to save the question.");

      return;
    } else {
      setOptionsError("");
    }

    // Continue with the update logic if all validations pass
    updateQuestion();
    updateQuestion();
  }

  const handleChooseCorrectAnswer = (index) => {
    setItemAtIndex({
      ...itemAtIndex,
      correctAnswer: index + 1,
    });
  };

  if (!itemAtIndex) {
    return <div>Loading...</div>; // You might want to show a loading indicator while fetching data.
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-900 gap-5 edit-modal">
      <div className="max-w-lg p-4 bg-white rounded shadow mr-4 w-[50rem] ">
        <label className="block mb-2 font-semibold">Title:</label>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
        />
        {titleError && <div className="text-red-500">{titleError}</div>}

        <label className="block mb-2 font-semibold">Question:</label>
        <textarea
          value={editedQuestion}
          onChange={(e) => setEditedQuestion(e.target.value)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
        />
        {questionError && <div className="text-red-500">{questionError}</div>}

        <label className="block mb-2 font-semibold">Options:</label>
        {itemAtIndex.options.map((option, index) => (
          <div key={index} className="flex mb-2">
            <input
              type="text"
              value={option.text}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="w-3/4 p-2 border rounded-l focus:outline-none focus:border-blue-500"
            />

            <button onClick={() => handleDeleteOptionClick(index)}>
              <MdDelete style={{ color: "red", fontSize: "2rem" }} />
            </button>

          </div>
        ))}
        {optionsError && <div className="text-red-500">{optionsError}</div>}
        <label className="block mb-2 font-semibold">Correct Answer:</label>
        <select
          value={itemAtIndex.correctAnswer}
          onChange={(e) => handleChooseCorrectAnswer(e.target.value - 1)}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500">
          {itemAtIndex.options.map((option, index) => (
            <option key={index} value={index + 1}>
              <b className="font-bold">Option {index + 1} -</b>
              <span>{option.text}</span>
            </option>
          ))}
        </select>

        <button
          onClick={handleAddOptionClick}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Add Option
        </button>

        <button
          onClick={handleUpdate}
          className="w-full p-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700">
          Update
        </button>

        <button
          onClick={() => toggleEditModal(false)}
          className="w-full p-2 mt-4 bg-green-500 text-white rounded hover:bg-green-700">
          Cancel
        </button>

        <hr className="my-4" />
      </div>
    </div>
  );
}

export default EditModal;
