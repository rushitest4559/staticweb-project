import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/navbar";
import { InstancesPage } from "./pages/instances";
import AuthWrapper from "./AuthWrapper";
import Home from "./pages/home";

function App() {
  return (
    <div className="pt-14">
      <Router>
        <AuthWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instances" element={<InstancesPage />} />
          </Routes>
        </AuthWrapper>
      </Router>
    </div>
  );
}

export default App;
