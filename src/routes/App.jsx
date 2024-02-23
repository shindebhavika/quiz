
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { QuizContextProvider } from "../data/QuizContext";


// import { QuizContextProvider } from '../data/QuizContext'; // Adjust the import path

function App() {
  return (
    <>
      <div className="main-wrapper min-h-full">
        {/* Wrap the components where you want to use QuizContextProvider */}
       <QuizContextProvider><Navbar />
          <Outlet />
          <Footer />
          </QuizContextProvider>
          
      </div>
    </>
  );
}

export default App;
