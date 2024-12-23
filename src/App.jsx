import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Body from "./components/body/body";
import { useLocation } from "react-router-dom";
import Footer from "./components/footer/footer";

function App() {
  const location = useLocation();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 0,
        }}
      >
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Body />} />
          <Route path="/groups/:groupId" element={<Body />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
