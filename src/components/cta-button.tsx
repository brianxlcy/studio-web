import { cn } from "@/lib/utils";

export default function CtaButton({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "w-fit text-[22px] font-bold italic leading-none tracking-[-0.03em] select-none",
        className
      )}
      {...props}
    />
  );
}
