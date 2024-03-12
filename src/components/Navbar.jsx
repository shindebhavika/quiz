import { Link, useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();
  

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
         
        </div>
      </header>
    </div>
  );
}

export default Navbar;
