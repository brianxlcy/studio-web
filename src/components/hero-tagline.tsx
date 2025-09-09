import { cn } from "@/lib/utils";

export function HeroTagline({
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "w-full text-hero-tagline select-none flex justify-between",
        className
      )}
      {...props}
    />
  );
}

export function HeroTaglinePrefix({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("ml-(--hero-tagline-prefix-margin-l)", className)}
      {...props}
    />
  );
}

export function HeroTaglineSuffix({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return <span className={className} {...props} />;
}
