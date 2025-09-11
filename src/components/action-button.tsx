import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

export default function ActionButton({
  className,
  href,
  ...props
}: {
  href?: string;
} & React.ComponentProps<"button">) {
  const classes = cn(
    `group w-fit h-(--action-button-height) flex items-center gap-(--action-button-gap) text-action-button italic select-none`,
    className
  );

  if (href) {
    return (
      <Link
        to={href}
        className={classes}
        {...(props as React.ComponentProps<typeof Link>)}
      />
    );
  }

  return <button className={classes} {...props} />;
}
