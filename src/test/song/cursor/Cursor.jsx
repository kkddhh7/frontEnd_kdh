import React, { useState, useEffect } from 'react';
import './Cursor.css';

export default function Cursor() {
  const [xy, setXY] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const xyHandler = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setXY({ x: mouseX, y: mouseY });
    };

    const updatePosition = (e) => {
      requestAnimationFrame(() => xyHandler(e));
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <img
      src="/images/test.png"
      className="pointer"
      style={{
        transform: `translate(${xy.x}px, ${xy.y}px)`,
      }}
    />
  );
}
