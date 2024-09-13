import React, {useEffect, useState} from 'react';
import juniper from './image/juniper/juniper.png';
import book from './image/juniper/book_juniper.png';
import BackgroundAnimation from './backgroundAnimation';
import detail from './image/juniper/juniper_detail.png';

export default function Juniper() {
  const [showImages, setShowImages] = useState(false);
  const [commentOpacity, setCommentOpacity] = useState(0);
  
  const handleIconClick = () => {
    // 아이콘 클릭 시 동작
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        setShowImages(true);
        const opacityTimer = setInterval(() => {
            setCommentOpacity(prev => {
                if (prev < 0.8) {
                    return prev + 0.08;
                } else {
                    clearInterval(opacityTimer);
                    return prev;
                }
            }
          );
          setCommentOpacity(prev => {
            if (prev < 0.8) {
                return prev + 0.08;
            } else {
                clearInterval(opacityTimer);
                return prev;
            }
        });
        }, 100);

        return () => clearInterval(opacityTimer);
    }, 1000);

    return () => clearTimeout(timer);
}, []);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '1069px', width: '1710px' }}>
      <BackgroundAnimation/>
      <img src={juniper} alt="향나무" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
      {showImages && (
                    <img src={detail} alt="향나무 태그" style={{ position: 'absolute', top: '50px', left: '1500px', width: '100px', zIndex: 3,opacity: commentOpacity,
                      transition: 'opacity 0.5s ease-in-out, left 1.5s ease-in-out' }} />
                )}
      <div style={{ position: 'absolute', top: '75%', left: '5%', zIndex: 3 }} onClick={handleIconClick}>
        <img src={book} alt="서책" style={{ width: '150px', cursor: 'pointer' }} />
      </div>
    </div>
  );
}
