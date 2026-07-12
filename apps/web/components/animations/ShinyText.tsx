import React from 'react';

interface ShinyTextProps {
  text?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  children,
  disabled = false,
  speed = 3,
  className = '',
  color = '#b5b5b5',
  shineColor = '#ffffff',
  spread = 120,
}) => {
  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: disabled ? 'none' : `shiny-text-shine ${speed}s infinite linear`,
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shiny-text-shine {
          0% { background-position: 150% center; }
          100% { background-position: -50% center; }
        }
      `}} />
      <span
        className={`inline-block ${className}`}
        style={gradientStyle}
      >
        {children || text}
      </span>
    </>
  );
};

export default ShinyText;
