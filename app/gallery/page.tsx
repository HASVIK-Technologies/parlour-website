import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";

export default function Gallery() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <GalleryCTA />
      <Footer />
    </main>
  );
}