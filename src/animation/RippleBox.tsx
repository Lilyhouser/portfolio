"use client";
import React, { useRef } from "react";
import "./ripplebox.css";

const RippleBox = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const currentRef = useRef(0);

  const createRipples = (x: number, y: number) => {
    const box = ref.current;
    if (!box) return;

    const sizes = [
      { size: 100, cls: "ripple ripple-big" },
      { size: 80, cls: "ripple ripple-small" },
    ];

    sizes.forEach(({ size, cls }) => {
      const ripple = document.createElement("span");
      ripple.className = cls;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x - size / 2}px`;
      ripple.style.top = `${y - size / 2}px`;

      box.appendChild(ripple);
      setTimeout(() => ripple.remove(), 2400);
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const now = Date.now();
    if (now - currentRef.current < 200) return;

    currentRef.current = now;

    requestAnimationFrame(() => {
      const rect = ref.current!.getBoundingClientRect();
      createRipples(e.clientX - rect.left, e.clientY - rect.top);
    });
  };

  return (
    <div ref={ref} className="ripple-box" onMouseMove={handleMouseMove}>
      {children}
    </div>
  );
};

export default RippleBox;
