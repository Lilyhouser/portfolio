"use client";
import { useRef } from "react";
import './ripplebox.css'

const RippleBox = () => {
  const ref = useRef<HTMLDivElement>(null);

  const createRipples = (x: number, y: number) => {
    const box = ref.current;
    if (!box) return;

    const sizes = [
      { size: 100, cls: "ripple ripple-big" },
      { size: 80, cls: "ripple ripple-small" },
    ];

    sizes.forEach(({ size, cls }, i) => {
      const ripple = document.createElement("span");
      ripple.className = cls;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x - size / 2}px`;
      ripple.style.top = `${y - size / 2}px`;

      box.appendChild(ripple);
      setTimeout(() => ripple.remove(), 2400);
    });
  };

  const handleClick = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    createRipples(
      e.clientX - rect.left,
      e.clientY - rect.top
    );
  };

  return <div className="ripple-box" ref={ref} onClick={handleClick} />;
};

export default RippleBox;
