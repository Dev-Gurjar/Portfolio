// src/components/WipOverlay.tsx
import { useEffect, useState } from "react";

export default function WipOverlay({ ms = 3000 }: { ms?: number }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), ms);
    return () => clearTimeout(t);
  }, [ms]);

  if (!visible) return null;

  return (
    <div
      id="wip-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 text-5xl font-bold transition-opacity duration-700"
      aria-hidden="true"
    >
      Work in Progress...
    </div>
  );
}
