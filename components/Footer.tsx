import config from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6">
      {config.footer.text}
    </footer>
  );
}
