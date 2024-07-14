import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { label: '행사 정보', path: '/eventinfo' },
    { label: '궁궐 여행 정보', path: '/travelinfo' },
    { label: '퀴즈 풀기', path: '/quiz' },
    { label: '스팟 캡쳐 사진첩', path: '/photoalbum' },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const activePageIndex = pages.findIndex(page => page.path === currentPath);
    setActiveIndex(activePageIndex);
    console.log(`Current path: ${currentPath}, Active index: ${activePageIndex}`);
  }, [location.pathname]);

  const handleClick = (index, path) => {
    navigate(path);
  };

  return (
    <nav className="navigation-bar">
      {pages.map((page, index) => (
        <button
          key={index}
          className={`nav-button ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index, page.path)}
        >
          {page.label}
        </button>
      ))}
    </nav>
  );
};

export default NavigationBar;
