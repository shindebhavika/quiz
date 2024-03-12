import { Link, useNavigate } from "react-router-dom";
import QuizContext from "../data/QuizContext";
import { useContext } from "react";

function Navbar() {
  const navigate = useNavigate();
  const { name, setName} = useContext(QuizContext);

  return (
    <div className=" Header h-32 w-full">
      <header className="flex flex-wrap justify-between items-center py-2 mb-4 mt-3">
        <div className="flex-shrink-0 w-28 ml-8">
          <Link to="/" className="flex items-center ">
            <img src="/images/logo.png" alt="Logo" className="w-full" />
          </Link>
        </div>

        <div className="text-end space-x-3 mr-8">
          <button
            type="button"
            className="btn nav-links"
            onClick={() => {
              navigate("/");
            }}>
            Home
          </button>
          <button
            type="button"
            className="btn ml-3 nav-links"
            onClick={() => {
              navigate("/my-quizes");
            }}>
            My Quiz
          </button>
          <button
            type="button"
            className="btn ml-3 nav-links"
            onClick={() => {
              navigate("/Play-Quiz");
            }}>
            Play Quiz
          </button>
          <button>
            {name.length>5 && (
            <button className="profile-container">
               <div className="flex items-center justify-center ">
                <div className="w-22 rounded-lg bg-transparent p-2 text-center shadow-md dark:bg-gray-800">
                  <figure className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-person-fill text-white dark:text-indigo-300"
                      viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    </svg>
                  </figure>
                  <h2 className="mt-1 text-sm font-bold text-indigo-600 dark:text-indigo-400">
                    {name}
                  </h2>
                </div>
              </div>
            </button>
            )}
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
