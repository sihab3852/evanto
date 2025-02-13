import Charity from "../Component/Charity";
import Community from "../Component/community";
import DailyUpdate from "../Component/DailyUpdate";
import Evanto from "../Component/Evanto";
import Footer from "../Component/Footer";
import Helpthem from "../Component/Helpthem";
import Hero from "../Component/Hero";
import LatestCauses from "../Component/LatestCauses";
import Navbar from "../Component/Navbar";
import Testimonial from "../Component/Testimonial";
import Volunteer from "../Component/Volunteer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Charity />

      <LatestCauses />

      <Community />

      <Volunteer />

      <Testimonial />

      <Helpthem />

      <DailyUpdate />

      <Evanto />

      <Footer />
    </>
  );
}

export default App;
