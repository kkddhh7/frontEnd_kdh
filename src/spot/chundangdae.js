import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chundangdae from './image/chundangdae.png';
import ennuch from './image/chundangdae_ennuch.png';
import book from './image/book.png';


export default function Chundangdae() {
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
    <div style={{ position: 'relative' }}>
      <img src={chundangdae} alt="배경" style={{ width: '100%' }} />
      <div style={{ position: 'absolute', top: '40%', left: '70%' }} onClick={() => handleIconClick('/chundangdae/book')}>
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