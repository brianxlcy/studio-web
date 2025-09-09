import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-svh flex items-center">
      <video
        className="absolute inset-0 size-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="https://assets.sp.studio/website-bg-test.mp4"
          type="video/mp4"
        />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="@container w-(--hero-width) h-auto aspect-[2150/800] mx-auto flex flex-col bg-red-500">
        <div className="absolute w-[31.8cqw] h-auto aspect-[0.855] bg-white/72 backdrop-blur-2xl rounded-xl self-center" />
        <h1 className="text-hero-tagline select-none flex justify-between">
          <span>Stu</span>
          <span>dio</span>
        </h1>
      </div>
    </div>
  );
}
