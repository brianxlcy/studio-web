import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-svh flex items-center">
      <div className="max-w-[1360px] mx-auto px-10 flex flex-col">
        <span className="text-[20px] font-medium leading-none tracking-[-0.02em] select-none">
          For those who share
        </span>
        <h1 className="text-[300px] font-bold leading-none tracking-[-0.02em] select-none">
          Studio
        </h1>
      </div>
    </div>
  );
}
