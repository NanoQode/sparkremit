import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import { Header } from "./components";
import { Footer } from "./components";
import { Home , Contact , Notfound} from "./pages";
function App() {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
