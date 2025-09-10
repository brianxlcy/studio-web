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

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-svh flex items-center py-20">
      <BackgroundVideo src="https://assets.sp.studio/website-bg-test.mp4" />
      <BackgroundVideoOverlay />

      <div className="relative @container w-(--hero-width) h-auto aspect-[2150/800] mx-auto flex flex-col items-center">
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
          <ActionButton>
            START NOW
            <div className="relative overflow-hidden">
              <img
                src={arrowRight}
                alt="arrowRightIcon"
                className="absolute inset-0 w-(--arrow-right-icon-width) h-(--arrow-right-icon-height)
                transition-transform ease-out duration-300 -translate-x-[150%] group-hover:translate-x-0"
              />
              <img
                src={arrowRight}
                alt="arrowRightIcon"
                className="w-(--arrow-right-icon-width) h-(--arrow-right-icon-height)
                transition-transform ease-out duration-300 group-hover:translate-x-[150%]"
              />
            </div>
          </ActionButton>
          <ActionButton>
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

      <footer className="absolute inset-x-0 bottom-8 text-center text-footer text-foreground/40 select-none animate-font-pulse">
        DRAG AND DROP
      </footer>
    </div>
  );
}
