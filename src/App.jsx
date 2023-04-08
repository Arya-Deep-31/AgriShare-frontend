import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home, Profile, Weather, Blog, AboutUs } from "./Pages";
import { Navbar, Footer } from "./Components";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
