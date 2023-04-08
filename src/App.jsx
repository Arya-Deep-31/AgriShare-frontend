import { Routes, Route } from "react-router-dom";

import { Home, Error, Blog, Weather } from "./Pages";

import { Navbar, Footer } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/aboutus" element={<AboutUs />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
