import React, { useState, useEffect } from "react";
import "./song/object/Experience.css";

export default function Test1() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div className="world">
      <div className="stage" style={{ 
          transform: `translateZ(${-scrollPosition}px)`,
        }}>
        <div className="house">
          <section className="wall wall-left"></section>
          <section className="wall wall-right"></section>
          <section className="wall wall-top"></section>
          <section className="wall wall-bottom"></section>
          <section className="wall wall-front">
            <div className="wall-content">
              <h2 className="wall-title">안녕하세요</h2>
            </div>
          </section>
        </div>
      </div>
    </div>
  </>
  );
}