import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./componets/forms/Forms";
import NoPage from "./componets/no-page/NoPage";
import VisitFormRecords from "./componets/forms/visit-form-records/VisitFormRecords"
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
            <Route path="/" element={<Form />} />
            {hasJWT() ? <Route path="visit-form-records" element={<VisitFormRecords />} /> : <></>}
            <Route path="error-page" element={<Error />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
