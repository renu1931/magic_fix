import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import HomePage from "./components/HomePage";
import FormDetails from "./components/FormDetails";
import ProfilePicture from "./components/ProfilePicture";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form-details" element={<FormDetails />} />
          <Route path="/profile-picture" element={<ProfilePicture />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
