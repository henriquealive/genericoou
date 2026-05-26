"use client";

import { useEffect, useRef } from "react";

interface AdUnitProps {
  slot: string;               // ex: "1234567890"
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  style?: React.CSSProperties;
  className?: string;
  label?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdUnit({
  slot,
  format = "auto",
  style,
  className,
  label = "Publicidade",
}: AdUnitProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded in development
    }
  }, []);

  return (
    <div
      className={className}
      style={{ textAlign: "center", ...style }}
      aria-label={label}
    >
      <p
        style={{
          fontSize: ".7rem",
          color: "var(--text-light)",
          marginBottom: ".25rem",
          textTransform: "uppercase",
          letterSpacing: ".06em",
        }}
      >
        {label}
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-7999785083569252"}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
