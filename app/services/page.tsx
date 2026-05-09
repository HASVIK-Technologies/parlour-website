import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
      <Footer />
    </main>
  );
}