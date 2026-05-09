import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingHero from "@/components/booking/BookingHero";
import BookingForm from "@/components/booking/BookingForm";
import BookingInfo from "@/components/booking/BookingInfo";

export default function Booking() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BookingHero />
      <BookingForm />
      <BookingInfo />
      <Footer />
    </main>
  );
}