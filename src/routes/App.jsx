import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { QuizContextProvider } from "../data/QuizContext";

function App() {
  const location = useLocation();

  // Check if the current route is the homepage
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div className="main-wrapper min-h-full w-full">
        {/* Wrap the components where you want to use QuizContextProvider */}
        <QuizContextProvider>
          <Navbar />
          <Outlet />
          {isHomePage && <Footer />}
        </QuizContextProvider>
      </div>
    </>
  );
}

export default App;
