import React, { useEffect, useState } from "react";
import { bb } from "../assets"; // Import cursor image

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <img
      src={bb}
      alt="Cursor"
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "100px",  // Increase size
        height: "150px", // Increase size
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;