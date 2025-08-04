import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = ".:",
  className = "",
  style = {},
  children,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const split = SplitText.create(rootRef.current.querySelector("p"), {
      type: "chars",
      charsClass: "inline-block will-change-transform",
    });

    // 保存原始文本内容和尺寸
    split.chars.forEach((el) => {
      const c = el as HTMLElement;
      c.setAttribute('data-original-width', c.offsetWidth.toString());
      c.setAttribute('data-original-height', c.offsetHeight.toString());
      gsap.set(c, { 
        attr: { "data-content": c.innerHTML },
        width: c.offsetWidth,
        height: c.offsetHeight
      });
    });

    const handleMove = (e: PointerEvent) => {
      split.chars.forEach((el) => {
        const c = el as HTMLElement;
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          gsap.to(c, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: c.dataset.content || "",
              chars: scrambleChars,
              speed,
            },
            ease: "none",
            onUpdate: function() {
              // 确保字符尺寸保持稳定
              const originalWidth = c.getAttribute('data-original-width');
              const originalHeight = c.getAttribute('data-original-height');
              if (originalWidth) c.style.width = originalWidth + 'px';
              if (originalHeight) c.style.height = originalHeight + 'px';
            }
          });
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener("pointermove", handleMove);

    return () => {
      el.removeEventListener("pointermove", handleMove);
      split.revert();
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div
      ref={rootRef}
      className={`inline-block ${className}`}
      style={{
        ...style,
        minWidth: 'fit-content',
        width: 'max-content'
      }}
    >
      <p className="inline-block whitespace-nowrap">{children}</p>
    </div>
  );
};

export default ScrambledText; 