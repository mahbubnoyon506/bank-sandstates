import Home from './Pages/Home/Home'
import { Route, Routes } from "react-router-dom";
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import About from './Pages/About/About';
import Blog from './Pages/Blogs/Blog';
import Contact from './Pages/Contact/Contact';
<link href="/dist/output.css" rel="stylesheet" />

function App() {
  return (
    <div>
      <Header/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/blogs" element={<Blog/>}/>
         <Route path="/contact" element={<Contact/>}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
