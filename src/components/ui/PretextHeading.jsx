import { layoutWithLines, prepareWithSegments } from "@chenglou/pretext";
import { createElement, useEffect, useMemo, useRef, useState } from "react";

const defaultSizes = [
  {
    minWidth: 0,
    fontFamily: '"Manrope"',
    fontSize: 34,
    fontWeight: 800,
    idealLines: 2,
    letterSpacing: "-0.045em",
    lineHeight: 38,
  },
  {
    minWidth: 640,
    fontFamily: '"Manrope"',
    fontSize: 46,
    fontWeight: 800,
    idealLines: 2,
    letterSpacing: "-0.05em",
    lineHeight: 48,
  },
  {
    minWidth: 960,
    fontFamily: '"Manrope"',
    fontSize: 58,
    fontWeight: 800,
    idealLines: 2,
    letterSpacing: "-0.055em",
    lineHeight: 58,
  },
];

function getActiveConfig(width, sizes) {
  return sizes.reduce(
    (active, size) => (width >= size.minWidth ? size : active),
    sizes[0],
  );
}

function buildFontString(config) {
  return `${config.fontStyle ?? "normal"} ${config.fontWeight ?? 700} ${config.fontSize}px ${config.fontFamily}`;
}

function scoreLines(lines, idealLines) {
  if (!lines.length) {
    return Number.POSITIVE_INFINITY;
  }

  const widths = lines.map((line) => line.width);
  const longest = Math.max(...widths);
  const shortest = Math.min(...widths);
  const last = widths.at(-1) ?? longest;
  const lineCountPenalty = Math.abs(lines.length - idealLines) * 18;
  const orphanPenalty = lines.length > 1 && last < longest * 0.58 ? 42 : 0;

  return longest - shortest + Math.abs(last - longest * 0.82) + lineCountPenalty + orphanPenalty;
}

export default function PretextHeading({
  as = "div",
  className = "",
  lineClassName = "",
  minWidthRatio = 0.68,
  sizes = defaultSizes,
  text,
  widthSteps = 8,
}) {
  const rootRef = useRef(null);
  const [availableWidth, setAvailableWidth] = useState(0);
  const [fontTick, setFontTick] = useState(0);

  useEffect(() => {
    const element = rootRef.current;

    if (!element) {
      return undefined;
    }

    const updateWidth = () => {
      setAvailableWidth(element.clientWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!document.fonts) {
      return undefined;
    }

    let mounted = true;
    const refresh = () => {
      if (mounted) {
        setFontTick((value) => value + 1);
      }
    };

    document.fonts.ready.then(refresh);
    document.fonts.addEventListener?.("loadingdone", refresh);

    return () => {
      mounted = false;
      document.fonts.removeEventListener?.("loadingdone", refresh);
    };
  }, []);

  const activeConfig = useMemo(
    () => getActiveConfig(availableWidth || 1280, sizes),
    [availableWidth, sizes],
  );

  const prepared = useMemo(() => {
    void fontTick;

    if (!text) {
      return null;
    }

    return prepareWithSegments(text, buildFontString(activeConfig));
  }, [activeConfig, fontTick, text]);

  const result = useMemo(() => {
    if (!prepared || !availableWidth) {
      return null;
    }

    const minWidth = Math.min(
      availableWidth,
      Math.max(availableWidth * minWidthRatio, activeConfig.fontSize * 3.15),
    );

    let best = {
      lines: layoutWithLines(prepared, availableWidth, activeConfig.lineHeight).lines,
      width: availableWidth,
    };
    let bestScore = scoreLines(best.lines, activeConfig.idealLines ?? 2);

    for (let step = 1; step <= widthSteps; step += 1) {
      const candidateWidth =
        availableWidth - ((availableWidth - minWidth) * step) / widthSteps;
      const candidate = layoutWithLines(
        prepared,
        candidateWidth,
        activeConfig.lineHeight,
      );
      const candidateScore = scoreLines(
        candidate.lines,
        activeConfig.idealLines ?? 2,
      );

      if (candidateScore < bestScore) {
        best = { lines: candidate.lines, width: candidateWidth };
        bestScore = candidateScore;
      }
    }

    return best;
  }, [activeConfig, availableWidth, minWidthRatio, prepared, widthSteps]);

  const lineStyle = {
    display: "block",
    fontFamily: activeConfig.fontFamily.replaceAll('"', ""),
    fontSize: `${activeConfig.fontSize}px`,
    fontStyle: activeConfig.fontStyle ?? "normal",
    fontWeight: activeConfig.fontWeight ?? 700,
    letterSpacing: activeConfig.letterSpacing ?? "-0.04em",
    lineHeight: `${activeConfig.lineHeight}px`,
  };

  return createElement(
    as,
    { ref: rootRef, className },
    <span
      className="block max-w-full"
      style={result ? { width: `${Math.min(result.width, availableWidth)}px` } : undefined}
    >
      {(result?.lines ?? [{ text }]).map((line, index) => (
        <span key={`${line.text}-${index}`} className={lineClassName} style={lineStyle}>
          {line.text}
        </span>
      ))}
    </span>,
  );
}
