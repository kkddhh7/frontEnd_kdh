import React, { useState, useEffect } from "react";
import "./song/object/Experience.css";
import "./song/object/door.css";

export default function Test1() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [doorsOpen, setDoorsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();

      const delta = e.deltaY;
      const newPosition = scrollPosition + delta;

      if (newPosition >= 3000 && !doorsOpen) {
        // Z축 위치가 3000px에 도달했을 때 문을 염
        setScrollPosition(3000);  // 문이 열릴 때는 스크롤 위치를 고정
        // 1초 동안 스크롤을 멈추고 문이 열리게 함
        setTimeout(() => {
          setDoorsOpen(true); // 문을 열기 시작
        }, 1000);
      } else if (doorsOpen) {
        // 문이 열리고 나서 다시 스크롤 할 수 있게 함
        setScrollPosition((prev) => Math.max(prev + delta, 3000));
      } else {
        // 일반적인 스크롤 동작
        setScrollPosition((prev) => Math.max(prev + delta, 0));
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollPosition, doorsOpen]);

  return (
    <div className="world">
      <div
        className="stage"
        style={{
          transform: `translateY(-20%) translateZ(${scrollPosition}px)`,
        }}
      >
        <div className="house">
          <section className="wall wall-left"></section>
          <section className="wall wall-right"></section>
          <section className="wall wall-top"></section>
          <section className="wall wall-bottom"></section>

          {/* 네 번째 벽 */}
          <section className="wall wall-front" style={{ transform: "translateZ(-3000px)" }}>
            <div className="wall-content">
              <div className="doors">
                <img
                  src="images/door_left.png"
                  alt="Left Door"
                  className={`door-left ${doorsOpen ? "open" : ""}`}
                />
                <img
                  src="images/door_right.png"
                  alt="Right Door"
                  className={`door-right ${doorsOpen ? "open" : ""}`}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
