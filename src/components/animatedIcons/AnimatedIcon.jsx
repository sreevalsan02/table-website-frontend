import React, { useState, useEffect } from 'react';
import { IoArrowDownCircleOutline } from "react-icons/io5"; // Import the icon component
import './animated.css'; // Import your CSS file

function AnimatedIcon() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [direction, setDirection] = useState('down'); // Track animation direction

  useEffect(() => {
    return () => setIsAnimating(false); // Cleanup function to stop animation on unmount
  }, []);

  const animate = () => {
    if (isAnimating) {
      setDirection(direction === 'down' ? 'up' : 'down');
    }
  };

  useEffect(() => {
    const intervalId = setInterval(animate, 10); // Animate every 1 second
    return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
  }, [isAnimating, direction]); // Re-run effect when isAnimating or direction changes

  return (
    <div className="container">
      <IoArrowDownCircleOutline // Use the imported icon component
        id="scroll-icon-home"
        className={`icon ${direction}`}
        style={{ animation: isAnimating ? 'move 1s ease-in-out alternate infinite' : '' }}
      />
    </div>
  );
}

export default AnimatedIcon;
