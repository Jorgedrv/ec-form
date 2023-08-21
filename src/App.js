import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import NoPage from "./components/no-page/NoPage";
import VisitedForm from './components/forms/visited-form/VisitedForm';
import VisitedFormRecords from "./components/forms/visited-form/visited-form-records/VisitedFormRecords"
import EnglishForm from './components/forms/english-form/EnglishForm';
import SpanishForm from './components/forms/spanish-form/SpanishForm';
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import Error from "./components/error/Error";
import { hasJWT } from "./shared/JwtUtil";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            {hasJWT() ? <Route path="visited-form-records" element={<VisitedFormRecords />} /> : <></>}
            <Route path="english-form" element={<EnglishForm />} />
            <Route path="visited-form" element={<VisitedForm />} />
            <Route path="spanish-form" element={<SpanishForm />} />
            <Route path="error-page" element={<Error />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
