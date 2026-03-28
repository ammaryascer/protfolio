"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isTextHovering, setIsTextHovering] = useState(false);

    // Mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for the outer circle
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target) return;

            const isInteractive = !!target.closest('a, button, [role="button"], input, select, textarea');
            const isText = !!target.closest('h1, h2, h3, h4, h5, h6, p, span, [data-cursor-text="true"]');

            setIsHovering(isInteractive);
            setIsTextHovering(!isInteractive && isText);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", updateMousePosition);
        document.body.addEventListener("mouseover", handleMouseOver);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        document.body.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            document.body.removeEventListener("mouseover", handleMouseOver);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [isVisible, mouseX, mouseY]);

    if (typeof window === "undefined") return null;

    return (
        <>
            <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

            {/* Center dot (Instant tracking) */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isVisible && !isTextHovering ? 1 : 0,
                }}
                transition={{ duration: 0.15 }}
            />

            {/* Outer circle (Trailing spring tracking) */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isTextHovering ? 5 : isHovering ? 1.5 : 1,
                    backgroundColor: isTextHovering ? "#ffffff" : isHovering ? "rgba(168, 85, 247, 0.1)" : "transparent",
                    border: isTextHovering ? "0px solid transparent" : "1px solid #c084fc",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
        </>
    );
}
