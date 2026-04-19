export default function VideoCard({
  videoId,
  big = false,
}: {
  videoId: string;
  big?: boolean;
}) {
  return (
    <div className="relative w-full h-full group">

      {/* VIDEO */}
      <iframe
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&showinfo=0`}
        allow="autoplay"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

      {/* GOLD BORDER EFFECT */}
      <div className="absolute inset-0 border border-yellow-400/40 transition" />

      {/* OPTIONAL TEXT */}
      {big && (
        <div className="absolute bottom-6 left-6 z-10">
          <h3 className="text-xl font-semibold text-white">
            Signature Experience
          </h3>
        </div>
      )}
    </div>
  );
}
