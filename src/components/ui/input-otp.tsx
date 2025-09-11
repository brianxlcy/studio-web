import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";

import { cn } from "@/lib/utils";

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-(--enter-code-input-gap) has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        `relative flex w-(--enter-code-input-width) h-(--enter-code-input-height) items-center justify-center
        border-b-(length:--enter-code-input-border-b) border-foreground/16 data-[active=true]:border-foreground/60
        text-enter-code-input transition-colors backdrop-blur-[30px]`,
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="animate-caret-blink bg-foreground
            h-(--enter-code-caret-height) w-(--enter-code-caret-width) duration-1000"
          />
        </div>
      )}
    </div>
  );
}

export { InputOTP, InputOTPSlot };
