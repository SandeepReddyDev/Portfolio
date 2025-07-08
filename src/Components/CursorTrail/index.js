import React, { useEffect, useState } from 'react';
import './index.css'

const CursorTrail = () => {
  const [trailPoints, setTrailPoints] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random(),
      };

      setTrailPoints((prev) => [...prev, newPoint]);

      setTimeout(() => {
        setTrailPoints((prev) => prev.filter(p => p.id !== newPoint.id));
      }, 500); // Shorter fade looks better
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {trailPoints.map((point) => (
        <div
          key={point.id}
          className="trail-dot"
          style={{
            left: point.x + 'px',
            top: point.y + 'px',
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
