import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./pages/Content";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <main className="min-w-[600px]">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
