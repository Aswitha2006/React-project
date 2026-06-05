import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureOne from "./components/FeatureOne";
import FeatureTwo from "./components/FeatureTwo";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureOne />
      <FeatureTwo />
      <Services />
      <Testimonial />
      <Newsletter />

      <div className="creative-divider">
        ✦ ✦ ✦
      </div>

      <Footer />
    </>
  );
}

export default App;