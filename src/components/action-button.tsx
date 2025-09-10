import { cn } from "@/lib/utils";

export default function ActionButton({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        `group w-fit h-(--action-button-height) flex items-center gap-(--action-button-gap) text-action-button italic select-none`,
        className
      )}
      {...props}
    />
  );
}
