import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Gallery from "@/components/home/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import VideoIntroduction from "@/components/home/VideoIntroduction";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <VideoIntroduction />
      <Hero />
      <Services />
      <Gallery />
      <Booking />
      <Footer />
    </main>
  );
}
