import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import HomePage from "./routes/HomePage.jsx"
import CreateQuizPage from "./routes/CreateQuizPage.jsx";
import StorageManger from "./store/index.js";
import MyQuizes from "./components/MyQuizes.jsx";

const router = createBrowserRouter([
  {
    path:"/",element:<App/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/Create-Quiz",
        element: <CreateQuizPage/>,
      },{
        path:"/my-quizes",
        element:<MyQuizes/>
      }
    ],
  }
 
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={StorageManger}>
      
        <RouterProvider router={router} />
     
    </Provider>
  </React.StrictMode>
);
