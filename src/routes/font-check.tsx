import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/font-check")({
  component: Font,
});

function Font() {
  const [fontFamily, setFontFamily] = useState("font-helvetica-neue");
  const [isItalic, setIsItalic] = useState(false);
  const [sampleText, setSampleText] = useState("Studio");
  const [fontSize, setFontSize] = useState(48);
  const [letterSpacing, setLetterSpacing] = useState(-0.02);

  const fontWeights = [
    { value: "font-thin", label: "Thin", weight: "100" },
    { value: "font-extralight", label: "Extra Light", weight: "200" },
    { value: "font-light", label: "Light", weight: "300" },
    { value: "font-normal", label: "Regular", weight: "400" },
    { value: "font-medium", label: "Medium", weight: "500" },
    { value: "font-semibold", label: "Semibold", weight: "600" },
    { value: "font-bold", label: "Bold", weight: "700" },
    { value: "font-extrabold", label: "Extra Bold", weight: "800" },
    { value: "font-black", label: "Black", weight: "900" },
  ];

  const fontFamilies = [
    {
      value: "font-helvetica-neue",
      label: "Helvetica Neue",
      css: "helvetica-neue-lt-pro",
    },
    { value: "font-sans", label: "Sans Serif", css: "ui-sans-serif" },
    { value: "font-serif", label: "Serif", css: "ui-serif" },
    { value: "font-mono", label: "Monospace", css: "ui-monospace" },
  ];

  return (
    <div className="min-h-svh bg-background text-foreground p-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Controls */}
          <div className="lg:col-span-1">
            <div className="p-6 rounded-lg sticky top-8">
              <h3 className="text-lg font-semibold mb-6">Controls</h3>

              {/* Font Family */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Font Family
                </label>
                <select
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-foreground/20 rounded text-foreground"
                >
                  {fontFamilies.map((family) => (
                    <option key={family.value} value={family.value}>
                      {family.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Font Style */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Font Style
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsItalic(false)}
                    className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                      !isItalic
                        ? "bg-foreground text-background"
                        : "bg-background border border-foreground/20 text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    Normal
                  </button>
                  <button
                    onClick={() => setIsItalic(true)}
                    className={`flex-1 px-3 py-2 rounded text-sm font-medium italic transition-colors ${
                      isItalic
                        ? "bg-foreground text-background"
                        : "bg-background border border-foreground/20 text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    Italic
                  </button>
                </div>
              </div>

              {/* Sample Text */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Sample Text
                </label>
                <input
                  type="text"
                  value={sampleText}
                  onChange={(e) => setSampleText(e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-foreground/20 rounded text-foreground placeholder-foreground/50 focus:border-foreground/50 focus:outline-none"
                  placeholder="Enter your text..."
                />
              </div>

              {/* Font Size */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Font Size: {fontSize}px
                </label>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="10"
                    max="400"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-full h-2 bg-foreground/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="number"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-background border border-foreground/20 rounded text-foreground focus:border-foreground/50 focus:outline-none"
                    min="10"
                    max="400"
                  />
                </div>
              </div>

              {/* Letter Spacing */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">
                  Letter Spacing: {letterSpacing}em
                </label>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="-0.1"
                    max="0.2"
                    step="0.005"
                    value={letterSpacing}
                    onChange={(e) => setLetterSpacing(Number(e.target.value))}
                    className="w-full h-2 bg-foreground/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="number"
                    value={letterSpacing}
                    onChange={(e) => setLetterSpacing(Number(e.target.value))}
                    step="0.005"
                    className="w-full px-3 py-2 bg-background border border-foreground/20 rounded text-foreground focus:border-foreground/50 focus:outline-none"
                    min="-0.1"
                    max="0.2"
                  />
                </div>
              </div>

              {/* CSS Output */}
              <div>
                <h4 className="text-sm font-medium mb-3">CSS Output</h4>
                <div className="bg-background p-4 rounded text-sm font-mono space-y-1">
                  <div className="text-foreground">
                    font-family:{" "}
                    {fontFamilies.find((f) => f.value === fontFamily)?.css};
                  </div>
                  <div className="text-foreground">
                    font-size: {fontSize}px;
                  </div>
                  <div className="text-foreground">
                    font-style: {isItalic ? "italic" : "normal"};
                  </div>
                  <div className="text-foreground">
                    letter-spacing: {letterSpacing}em;
                  </div>
                  <div className="text-foreground/70">
                    font-weight: [100-900];
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Preview - All 9 Font Weights */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-lg">
              <h3 className="text-lg font-semibold mb-6">
                Live Preview - All Font Weights
              </h3>

              <div className="space-y-8">
                {fontWeights.map((weight, index) => (
                  <div
                    key={index}
                    className="border-b border-foreground/10 pb-6 last:border-b-0"
                  >
                    <div className="flex items-baseline justify-between mb-3">
                      <h4 className="text-sm font-medium opacity-70">
                        {weight.label} ({weight.weight})
                      </h4>
                      <span className="text-xs font-mono opacity-50">
                        font-weight: {weight.weight}
                      </span>
                    </div>
                    <p
                      className={`${weight.value} ${fontFamily} ${
                        isItalic ? "italic" : ""
                      } leading-tight`}
                      style={{
                        fontSize: `${fontSize}px`,
                        letterSpacing: `${letterSpacing}em`,
                      }}
                    >
                      {sampleText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
