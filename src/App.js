import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Footer } from "./components";
import { Home, Contact, Help, Enterprice, Notfound } from "./pages";
import Blogs from "./pages/blogs/blogs";
import AboutUs from "./pages/about-us/about-us";
import Culture from "./pages/culture/culture";
import StepForm from "./pages/step-form/step-form";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/enterprice" element={<Enterprice />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/step-form" element={<StepForm />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
