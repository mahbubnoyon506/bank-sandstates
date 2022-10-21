import Home from './Pages/Home/Home'
import { Route, Routes } from "react-router-dom";
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import About from './Pages/About/About';
import Blog from './Pages/Blogs/Blog';
import Contact from './Pages/Contact/Contact';
import BacktoTop from './Components/BacktoTop/BacktoTop';
import Navbar from './Shared/Navbar';
import NotFound from './Pages/NotFound/NotFound';
<link href="/dist/output.css" rel="stylesheet" />

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <div className='mt-24 lg:mt-32'>
        <Routes className="mt-5">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <BacktoTop />
    </div>
  );
}

export default App;
