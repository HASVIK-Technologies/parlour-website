import Navbar from "@/components/Navbar";
import VideoIntroduction from "@/components/home/VideoIntroduction";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BeforeAfter from "@/components/home/BeforeAfter";
import Testimonials from "@/components/home/Testimonials";
import Team from "@/components/home/Team";
import Gallery from "@/components/home/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <VideoIntroduction />
      <Hero />
      <Services />
      <WhyChooseUs />
      <BeforeAfter />
      <Testimonials />
      <Team />
      <Gallery />
      <Booking />
      <Footer />
    </main>
  );
}
