import { createFileRoute } from "@tanstack/react-router";
import {
  BackgroundVideo,
  BackgroundVideoOverlay,
} from "@/components/background-video";
import {
  Asset,
  AssetImageContainer,
  AssetImage,
  AssetFileType,
  AssetMetadata,
  AssetTitle,
  AssetKeyValue,
  AssetKey,
  AssetValue,
} from "@/components/asset";
import {
  HeroTagline,
  HeroTaglinePrefix,
  HeroTaglineSuffix,
} from "@/components/hero-tagline";
import ActionButton from "@/components/action-button";
import arrowRight from "@/assets/arrow-right.svg";
import asterisk from "@/assets/asterisk.svg";
import logo from "@/assets/logo.svg";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle className="sr-only">Enter the code</DialogTitle>
          <DialogDescription className="sr-only">
            Enter the code
          </DialogDescription>

          <div className="relative size-full flex flex-col items-center justify-center max-w-[2560px] mx-auto">
            <header className="absolute top-0 left-0 flex flex-col gap-5 px-10 select-none">
              <div className="h-20 flex items-center px-2">
                <img
                  src={logo}
                  alt="spanStudio logo"
                  className="w-[44.6px] h-6"
                />
              </div>
              <h1 className="w-[338px] h-[140px] text-[80px] font-bold leading-[0.88] tracking-[-0.02em] italic">
                Enter the code
              </h1>
              <span className="text-[22px] leading-none tracking-[-0.02em] italic">
                Velocity matters.
              </span>
            </header>
            <InputOTP
              maxLength={6}
              inputMode="text"
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              data-1p-ignore="true"
            >
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTP>
            <footer className="absolute inset-x-0 bottom-8 text-center text-footer text-foreground/32 select-none">
              ESC TO ESCAPE
            </footer>
          </div>
        </DialogContent>
      </Dialog>

      <div className="relative min-h-svh flex items-center py-20">
        <BackgroundVideo src="https://assets.sp.studio/website-bg-test.mp4" />
        <BackgroundVideoOverlay />

        <div
          className={cn(
            "relative @container w-(--hero-width) h-auto aspect-[2150/800] mx-auto flex flex-col items-center",
            open && "opacity-0"
          )}
        >
          <Asset>
            <AssetImageContainer>
              <AssetImage
                src={
                  "https://pub-e3ee69ed1074405fbc5b9b3aab86b01d.r2.dev/keep-running-dont-stop.jpg"
                }
                alt="keep-running-dont-stop.jpg"
              />
              <AssetFileType>JPG</AssetFileType>
            </AssetImageContainer>
            <AssetMetadata>
              <AssetTitle>keep-running-dont-stop.jpg</AssetTitle>
              <AssetKeyValue>
                <AssetKey>Created by</AssetKey>
                <AssetValue>Nano Banana</AssetValue>
              </AssetKeyValue>
            </AssetMetadata>
          </Asset>
          <div className="h-5 835:hidden" />
          <div className="self-start px-(--logo-container-padding-x) mb-(--logo-container-margin-b)">
            <img
              src={logo}
              alt="spanStudio logo"
              className="w-(--logo-width) h-(--logo-height)"
            />
          </div>
          <HeroTagline>
            <HeroTaglinePrefix>Stu</HeroTaglinePrefix>
            <HeroTaglineSuffix>dio</HeroTaglineSuffix>
          </HeroTagline>
          <div className="self-start mt-(--action-button-group-margin-t) px-(--action-button-group-padding-x)">
            <ActionButton href="/login">
              START NOW
              <div className="relative overflow-hidden">
                <img
                  src={arrowRight}
                  alt="arrowRightIcon"
                  className="absolute inset-0 w-(--arrow-right-icon-width) h-(--arrow-right-icon-height)
                transition-transform ease-out duration-400 -translate-x-[150%] group-hover:translate-x-0"
                />
                <img
                  src={arrowRight}
                  alt="arrowRightIcon"
                  className="w-(--arrow-right-icon-width) h-(--arrow-right-icon-height)
                transition-transform ease-out duration-400 group-hover:translate-x-[150%]"
                />
              </div>
            </ActionButton>
            <ActionButton onClick={() => setOpen(true)}>
              ENTER THE CODE
              <img
                src={asterisk}
                alt="asteriskIcon"
                className="w-(--asterisk-icon-width) h-(--asterisk-icon-height)
              transition-transform ease-out duration-300 group-hover:rotate-[72deg]"
              />
            </ActionButton>
          </div>
        </div>

        <footer className="absolute inset-x-0 bottom-8 text-center text-footer text-foreground/32 select-none">
          DRAG AND DROP
        </footer>
      </div>
    </>
  );
}
