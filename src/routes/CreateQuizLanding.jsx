import React from "react";

function CreateQuizLanding({
  closeForm,
  selectedOption,
  handleSelectedOption,
}) {
  const handleRadioClick = (index) => {
    // Only handle the click if the selected option is different
    if (selectedOption !== index) {
      handleSelectedOption(index);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-900">
      <form className="bg-white rounded shadow-md p-[4rem] relative">
        {/* Close button */}
        <button
          className="text-gray-500 hover:text-gray-800 absolute top-4 right-4"
          onClick={closeForm}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Radio buttons */}
        <div>
          <input
            type="radio"
            name="options"
            value="SingleAnswer"
            className="btn-check"
            id="btn-check"
            autoComplete="off"
            checked={selectedOption === 0}
            onChange={() => handleRadioClick(0)}
            onClick={closeForm}
          />
          <label
            className={`btn ${
              selectedOption === 0 ? "btn-primary" : "btn-outline-primary "
            }`}
            htmlFor="btn-check">
            MCQ(Single Answer)
          </label>
        </div>
        <br />
        <div>
          <input
            type="radio"
            name="options"
            value="MultipleAnswer"
            className="btn-check"
            id="btn-check-2"
            autoComplete="off"
            checked={selectedOption === 1}
            onChange={() => handleRadioClick(1)}
            onClick={closeForm}
          />
          <label
            className={`btn ${
              selectedOption === 1 ? "btn-primary" : "btn-outline-primary"
            }`}
            htmlFor="btn-check-2">
            MCQ(Multiple Answer)
          </label>
        </div>
      </form>
    </div>
  );
}

export default CreateQuizLanding;
