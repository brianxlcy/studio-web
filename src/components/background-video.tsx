import { cn } from "@/lib/utils";

export function BackgroundVideo({
  src,
  className,
  ...props
}: {
  src: string;
} & React.ComponentProps<"video">) {
  return (
    <video
      className={cn("absolute inset-0 size-full object-cover -z-10", className)}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      {...props}
    >
      <source src={src} type="video/mp4" />
      {/* Fallback for browsers that don't support video */}
      Your browser does not support the video tag.
    </video>
  );
}

export function BackgroundVideoOverlay({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("absolute inset-0 -z-10 bg-black/60", className)}
      {...props}
    />
  );
}
