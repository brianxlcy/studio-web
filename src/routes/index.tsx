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

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-svh flex items-center">
      <BackgroundVideo src="https://assets.sp.studio/website-bg-test.mp4" />
      <BackgroundVideoOverlay />

      <div className="relative @container w-(--hero-width) h-auto aspect-[2150/800] mx-auto flex flex-col items-center bg-red-500">
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
        <h1 className="w-full text-hero-tagline select-none flex justify-between">
          <span>Stu</span>
          <span>dio</span>
        </h1>
      </div>
    </div>
  );
}
