import Home from './Pages/Home/Home'
import { Route, Routes } from "react-router-dom";
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import About from './Pages/About/About';
import Blog from './Pages/Blogs/Blog';
import Contact from './Pages/Contact/Contact';
import BacktoTop from './Components/BacktoTop/BacktoTop';
import Navbar from './Shared/Navbar';
<link href="/dist/output.css" rel="stylesheet" />

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <BacktoTop />
    </div>
  );
}

export default App;
