
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import FeaturedSection from "./components/FeaturedSection";
import WorkFlow from "./components/WorkFlow";
import Price from "./components/Price";
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeaturedSection />
        <WorkFlow />
        <Price />
        <Testimonials />
        <Footer />
      </div>
      
    </>
  )
}