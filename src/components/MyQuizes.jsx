import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";
import EditModal from "./EditModal";

function MyQuizes() {
  const [questions, setQuestions] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem("questions"));
    setQuestions(storedQuestions);
  }, []);

  const handleStatusChange = (index, newStatus) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].status = newStatus;
    setQuestions(updatedQuestions);
    localStorage.setItem("questions", JSON.stringify(updatedQuestions));
  };

  const toggleDeleteModal = (value, index) => {
    setDeleteIndex(index);
    setDeleteModal(value);
  };

  const deleteQuestion = () => {
    const allQuestions = JSON.parse(localStorage.getItem("questions"));
    allQuestions.splice(deleteIndex, 1);
    localStorage.setItem("questions", JSON.stringify(allQuestions));
    setQuestions(allQuestions);
    setDeleteModal(false);
  };

  const toggleEditModal = (value, index) => {
    setEditModal(value);
    setEditIndex(index);
  };

  const updateQuestion = () => {
    const allQuestions = JSON.parse(localStorage.getItem("questions"));
    setEditModal(false);
  };

  return (

    
    <div className="container mx-auto px-4 py-8 my-quiz">
      <h1 className="text-3xl font-bold mt-4 mb-4">Question List</h1>

      <Link to="/Create-Quiz" className="flex items-center">
        {" "}
        <button
          className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg  ml-[70%] mb-5
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
          Create New Quiz
        </button>
      </Link>
      {questions  ? (
        <div style={{ maxHeight: "auto", overflowY: "auto" }} className="scroll-container">
      <table className="min-w-full bg-white border border-gray-300 table-data">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Quiz No</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Created Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>

        <tbody>
          {questions.map((question, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b"> {index + 1}</td>

              <td className="py-2 px-4 border-b">{question.title}</td>
              <td className="py-2 px-4 border-b">
                <label className="relative inline-flex items-center cursor-pointer ">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={question.status === "active"}
                    onChange={() =>
                      handleStatusChange(
                        index,
                        question.status === "active" ? "inactive" : "active"
                      )
                    }
                  />
                  <div
                    className={`group peer ring-0 bg-gradient-to-tr toggle ${
                      question.status === "active"
                        ? "from-emerald-500 via-lime-400 to-lime-500"
                        : "from-rose-100 via-rose-400 to-rose-500"
                    }  rounded-full outline-none duration-300 after:duration-300 w-15 h-10  shadow-md  peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-8 after:w-10 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-10 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0 w-[92px] h-13`}></div>
                  <div className="ml-[20px] font-semibold ">
                
                    {question.status === "active" ? "Active" : "Inactive"}
                  </div>
                </label>
              </td>
              <td className="py-2 px-4 border-b">{question.time}</td>
              <td className="py-2 px-4 border-b flex">
                <button
                  className="delete-button mr-3"
                  onClick={() => toggleDeleteModal(true, index)}>
                  <svg className="delete-svgIcon" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>
                </button>

                <button
                  className="edit-button"
                  onClick={() => toggleEditModal(true, index)}>
                  <svg className="edit-svgIcon" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>  </div>) : (
        <h1 className="text-xl text-gray-600 mt-8 mb-4">
          Add at least one question.
        </h1>
      )}

      {deleteModal && (
        <CustomModal
          toggleDeleteModal={toggleDeleteModal}
          deleteQuestion={deleteQuestion}
        />
      )}

      {editModal && (
        <EditModal
          editIndex={editIndex}
          toggleEditModal={toggleEditModal}
          updateQuestion={updateQuestion}
        />
      )}
    </div>
  );
}

export default MyQuizes;
