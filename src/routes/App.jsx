import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

import { QuizContextProvider } from "../data/QuizContext";

function App() {
  const location = useLocation();

  
  const isPlayPage = location.pathname === "/Play-Quiz";

  return (
    <>
      <div className="main-wrapper min-h-full w-full">
    
        <QuizContextProvider>
          {(!isPlayPage && <Navbar></Navbar>)}
          <Outlet />
      
        </QuizContextProvider>
      </div>
    </>
  );
}

export default App;
