import { useContext, useRef } from "react";
import QuizContext from "../data/QuizContext";
import PlayQuizContainer from "./PlayQuizContainer";

function PLayQuizLanding({ isOpen, setIsOpen }) {
  const { name, setName } = useContext(QuizContext);

  const nameRef = useRef();

  const handleStartQuiz = (e) => {
    e.preventDefault();
    const newName = nameRef.current.value;

    if (newName.length < 5) {
      alert("Full Name of the user should be a minimum of 5 characters");
    } else {
      setName(newName);
      nameRef.current.value = ""; 

      setIsOpen(false); 
    }
  };

  return (
    <>
      {isOpen ? (
        <div className="popup w-[40%] bg-white shadow-lg rounded-lg p-8 tracking-[.2px] text-[20px] mx-auto mt-32 name-form">
          <form className="form flex flex-col items-start gap-4">
            <div className="note flex flex-col gap-2 ">
              <label className="title font-bold text-lg text-gray-700">
                Welcome,
              </label>
              <span className="subtitle text-sm text-[17px]">
                {" "}
                Enjoy interactive challenges with diverse topics, customizable
                features, and easy sharing options for a fun and engaging
                experience.
              </span>
            </div>
            <label htmlFor="name">Enter Your Name</label>
            <input
              ref={nameRef}
              id="name"
              placeholder="Name"
              title="Your Name"
              name="Name"
              type="text"
              className="input_field w-full h-10 px-3 border rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
            />

            <button
              className="submit flex items-center justify-center px-4 py-2 w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-md rounded-md text-white font-semibold"
              onClick={handleStartQuiz}>
              <span className="inline-block">Start Quiz</span>
            </button>
          </form>
        </div>
      ) : (
        <PlayQuizContainer
          setIsOpen={setIsOpen}
          name={name}
          setName={setName}
        />
      )}
    </>
  );
}

export default PLayQuizLanding;
