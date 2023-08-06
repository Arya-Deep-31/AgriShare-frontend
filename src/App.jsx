import { Routes, Route, Navigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { Home, Blog, Weather, ConnectFarmer, Profile, AboutUs } from "./Pages";

import { Navbar, Footer } from "./Components";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<AboutUs />} />

        <Route path="/connect" element={<ConnectFarmer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
