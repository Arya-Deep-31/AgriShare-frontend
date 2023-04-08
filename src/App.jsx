import { Routes, Route } from "react-router-dom";

import { Home, Error, Weather, AboutUs } from "./Pages";

import { Navbar, Footer } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/aboutus" element={<AboutUs />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
