import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import SharedLayout from "./pages/SharedLayout";
import Primes from "./pages/Primes";
import Branch1A from "./pages/Branch1A";
import End1 from "./pages/End1";
import Branch1B from "./pages/Branch1B";
import Branch2A from "./pages/Branch2A";
import Branch2B from "./pages/Branch2B";
import End2 from "./pages/End2";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/story" element={<SharedLayout />}>
          <Route path="/story/primes" element={<Primes />} />
          <Route path="/story/branch1A" element={<Branch1A />} />
          <Route path="/story/end1" element={<End1 />} />
          <Route path="/story/branch1B" element={<Branch1B />} />
          <Route path="/story/branch1B/branch2A" element={<Branch2A />} />
          <Route path="/story/branch1B/branch2B" element={<Branch2B />} />
          <Route path="/story/end2" element={<End2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
