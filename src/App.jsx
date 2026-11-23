import { BrowserRouter, Routes, Route } from "react-router-dom";
import TattooBooking from "./components/TattooBooking";

import Navbar from "./components/Navbar";
import ScrollManager from "./components/ScrollManager";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/tattoo-booking" element={<TattooBooking />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;