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
import { useEffect, useState } from 'react';
import Aos from 'aos';
import Loader from './Components/Loader/Loader';
import Corporate from './Pages/Corporate/Corporate';
import Personal from './Pages/Personal/Personal';
import Mortgase from './Pages/Mortgase/Mortgase';
import TravelInsurance from './Pages/TravelInsurance/TravelInsurance';
import AboutUs from './Pages/About/AboutUs';
import Loan from './Pages/Loan/Loan';
import Closure from './Pages/ForClosure/Closure';
import Assets from './Pages/DigitalAssets/Assets';
import Covid from './Pages/Covid/Covid';
import Investments from './Pages/PropertyInvestments/Investments';
import ShareIndex from './Pages/ShareIndex/ShareIndex';
import Insurance from './Pages/Insurance/Insurance';
import Others from './Pages/Others/Others';
<link href="/dist/output.css" rel="stylesheet" />

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    Aos.init({
      duration: 2500,
    });
  }, []);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, [1000])
  }, [])

  return (
    <>
      {
        loading ? <Loader></Loader> :
          <div className='mt-24 lg:mt-32'>
            <Navbar />
            <Routes className="mt-5">
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/loader" element={<Loader />} />
              <Route path="/corporate" element={<Corporate />} />
              <Route path="/personal" element={<Personal />} />
              <Route path="/mortgage" element={<Mortgase />} />
              <Route path="/loan" element={<Loan />} />
              <Route path="/closure" element={<Closure />} />
              <Route path="/assets" element={<Assets />} />
              <Route path="/covid" element={<Covid />} />
              <Route path="/investments" element={<Investments />} />
              <Route path="/shareindex" element={<ShareIndex />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/others" element={<Others />} />


              <Route path="/travelInsurance" element={<TravelInsurance />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="*" element={<NotFound />} />


            </Routes>
            <BacktoTop />
            <Footer />
          </div>
      }
    </>
  );
}

export default App;
