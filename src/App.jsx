import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/digital-marketing-services-in-india"
            element={<HomePage />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer  />
    </>
  );
}

export default App;
