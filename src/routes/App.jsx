import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { QuizContextProvider } from "../data/QuizContext";

function App() {
  const location = useLocation();

  // Check if the current route is the homepage or play page
  const isHomePage = location.pathname === "/";
  const isPlaypage = location.pathname === "/Play-Quiz";

  return (
    <>
      <div className="main-wrapper min-h-full w-full">
        {/* Wrap the components where you want to use QuizContextProvider */}
        <QuizContextProvider>
          {(!isPlaypage && <Navbar></Navbar>)}
          <Outlet />
          {/* {isHomePage && <Footer />} */}
        </QuizContextProvider>
      </div>
    </>
  );
}

export default App;
