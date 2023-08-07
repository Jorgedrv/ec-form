import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componets/home/Home";
import NoPage from "./componets/no-page/NoPage";
import VisitedForm from './componets/forms/visited/visited-form/VisitedForm';
import VisitedFormRecords from "./componets/forms/visited/visited-form-records/VisitedFormRecords"
import Footer from "./componets/footer/Footer";
import Navigation from "./componets/navigation/Navigation";
import Error from "./componets/error/Error";
import { hasJWT } from "./shared/JwtUtil";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            {hasJWT() ? <Route path="visited-form-records" element={<VisitedFormRecords />} /> : <></>}
            <Route path="visited-form" element={<VisitedForm />} />
            <Route path="error-page" element={<Error />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
