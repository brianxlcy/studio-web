import { cn } from "@/lib/utils";

export function Asset({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        `absolute w-[31.8cqw] h-auto aspect-[0.855] p-1.5 flex flex-col gap-3
        bg-white/72 backdrop-blur-2xl rounded-[14px] font-inter select-none pointer-events-none`,
        className
      )}
      {...props}
    />
  );
}

export function AssetImageContainer({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative w-full h-auto aspect-square rounded-lg p-2",
        className
      )}
      {...props}
    />
  );
}

export function AssetImage({
  className,
  ...props
}: React.ComponentProps<"img">) {
  return (
    <img
      className={cn(
        "absolute inset-0 size-full object-cover rounded-lg",
        className
      )}
      {...props}
    />
  );
}

export function AssetFileType({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        `w-fit h-[18px] px-[5px] flex items-center rounded-[5px] border
        border-[#7d7d7d]/40 bg-[#ebebeb]/24 bg-blend-difference backdrop-blur-md
        text-[14px] font-[450] text-white/80 leading-[1.2] tracking-[-0.02em]`,
        className
      )}
      {...props}
    />
  );
}

export function AssetMetadata({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-[5px] px-2 pb-[14px]", className)}
      {...props}
    />
  );
}

export function AssetTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "text-[17px] font-medium text-black/88 leading-[1.2] tracking-[-0.02em] truncate",
        className
      )}
      {...props}
    />
  );
}

export function AssetKeyValue({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center gap-[5px] opacity-50", className)}
      {...props}
    />
  );
}

export function AssetKey({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-[14px] font-medium text-black/88 leading-[1.2] opacity-60",
        className
      )}
      {...props}
    />
  );
}

export function AssetValue({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-[14px] font-medium text-black/88 leading-[1.2]",
        className
      )}
      {...props}
    />
  );
}
