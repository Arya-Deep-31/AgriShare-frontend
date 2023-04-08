import { Routes, Route } from "react-router-dom";

import { Home, Error, Blog, Weather, ConnectFarmer } from "./Pages";

import { Navbar, Footer } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/connect" element={<ConnectFarmer />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
