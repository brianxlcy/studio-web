import { cn } from "@/lib/utils";

export function Asset({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        `absolute w-[31.8cqw] h-auto aspect-[0.855] p-(--asset-padding) flex flex-col gap-(--asset-gap)
        bg-white/72 backdrop-blur-2xl rounded-asset font-inter select-none pointer-events-none`,
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
        "relative w-full h-auto aspect-square p-(--asset-image-container-padding)",
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
        "absolute inset-0 size-full object-cover rounded-asset-image",
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
        `w-fit h-(--asset-file-type-height) px-(--asset-file-type-padding-x) py-(--asset-file-type-padding-y)
        flex items-center rounded-asset-file-type border
        border-[#7d7d7d]/40 bg-[#ebebeb]/24 bg-blend-difference backdrop-blur-md
        text-asset-file-type text-white/80`,
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
      className={cn(
        "flex flex-col gap-(--asset-metadata-gap) px-(--asset-metadata-padding-x) pb-(--asset-metadata-padding-b)",
        className
      )}
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
      className={cn("text-asset-title text-black/88 truncate", className)}
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
      className={cn(
        "flex items-center gap-(--asset-key-value-gap) opacity-50",
        className
      )}
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
      className={cn("text-asset-key-value text-black/88 opacity-60", className)}
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
      className={cn("text-asset-key-value text-black/88", className)}
      {...props}
    />
  );
}
