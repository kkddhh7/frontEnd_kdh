import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import yunghwadang from './image/yunghwadang.png';
import ennuch from './image/yunghwadang_ennuch.png';
import book from './image/book.png';


export default function Yunghwadang() {
    const [showImages, setShowImages] = useState(false);
    const navigate = useNavigate();
    const handleIconClick = (path) => {
        navigate(path);
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowImages(true);
      }, 2000); 
  
      return () => clearTimeout(timer);
    }, []);
  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100vh', width: '100vw' }}>
      <img src={yunghwadang} alt="배경" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', top: '40%', left: '70%' }} onClick={() => handleIconClick('/yunghwadang/book')}>
        <img src={book} alt="서책" style={{ width: '350px', cursor: 'pointer' }} />
      </div>
      {showImages && (
        <>
          <img src={ennuch} alt="내시" style={{ position: 'absolute', top: '40%', left: '32%', width: '700px' }} />
        </>
      )}
    </div>
  );
}