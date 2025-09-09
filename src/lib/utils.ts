import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      color: [],
    },
    classGroups: {
      "font-size": [
        {
          text: [
            "hero-tagline",
            "asset-file-type",
            "asset-title",
            "asset-key-value",
          ],
        },
      ],
      rounded: [{ rounded: ["main", "modal"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
