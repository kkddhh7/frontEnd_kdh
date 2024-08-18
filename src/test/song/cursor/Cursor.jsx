import React, { useState, useEffect,useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(null); // 'left', 'right' 또는 null
  const [currentImage, setCurrentImage] = useState("/.png"); // 초기 이미지는 멈춘 상태의 이미지
  const imageIndexRef = useRef(0); // 현재 보여지는 이미지 인덱스

  useEffect(() => {
    let lastX = 0;

    const xyHandler = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setXY({ x: mouseX, y: mouseY });

      // 좌우 이동 방향을 설정
      if (mouseX > lastX) {
        setDirection('right');
      } else if (mouseX < lastX) {
        setDirection('left');
      }

      lastX = mouseX; // 현재 X 좌표를 이전 좌표로 업데이트
    };

    const updatePosition = (e) => {
      requestAnimationFrame(() => xyHandler(e));
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  // 이미지 변경 로직
  useEffect(() => {
    let interval;

    if (direction) {
      // 방향에 따라 이미지를 번갈아가며 보여줌
      interval = setInterval(() => {
        if (direction === 'right') {
          const images = ["/images/cursor_right1.png", "/images/cursor_right2.png"]; // 오른쪽 이동 시
          imageIndexRef.current = (imageIndexRef.current + 1) % images.length;
          setCurrentImage(images[imageIndexRef.current]);
        } else if (direction === 'left') {
          const images = ["/images/cursor_left1.png", "/images/cursor_left2.png"]; // 왼쪽 이동 시
          imageIndexRef.current = (imageIndexRef.current + 1) % images.length;
          setCurrentImage(images[imageIndexRef.current]);
        }
      }, 100); // 100ms 간격으로 이미지 변경 (이 간격은 필요에 따라 조정)

    } else {
      // 멈추었을 때 3번 이미지로 설정
      setCurrentImage("/images/cursor_stand.png");
    }

    return () => {
      clearInterval(interval);
    };
  }, [direction]);

  // 마우스가 멈췄을 때 direction을 null로 설정
  useEffect(() => {
    const handleMouseStop = () => {
      setDirection(null);
    };

    const timeoutId = setTimeout(handleMouseStop, 150); // 150ms 동안 마우스가 멈추면 멈춤 상태로 전환

    return () => {
      clearTimeout(timeoutId);
    };
  }, [xy]); // xy 좌표가 업데이트될 때마다 마우스 멈춤 감지

  return (
    <img
      src={currentImage}
      className="pointer"
      style={{
        transform: `translate(${xy.x}px, ${xy.y}px)`,
      }}
    />
  );
}
