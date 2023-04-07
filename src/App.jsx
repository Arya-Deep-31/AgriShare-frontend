import { Routes, Route } from "react-router-dom";

import { Home, Error, Weather } from "./Pages";

import { Navbar, Footer } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
