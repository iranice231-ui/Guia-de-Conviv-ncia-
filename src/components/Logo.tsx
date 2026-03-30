import React from 'react';

export function LogoSVG({ className = "w-full h-full object-contain object-left" }: { className?: string }) {
  return (
    <img 
      src="/logo.png" 
      alt="Viana e Moura Construções" 
      className={className} 
    />
  );
}
