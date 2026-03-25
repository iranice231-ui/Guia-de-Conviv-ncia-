import React from 'react';

export function LogoSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 40)">
        {/* Left Structure */}
        <g transform="translate(170, 30)">
          <rect x="-5" y="-25" width="6" height="20" fill="#C1272D" rx="2" />
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={`left-${i}`} transform={`translate(0, ${i * 28})`}>
              <path d="M -2 0 L -28 18 L -28 40 L -2 22 Z" fill="#C1272D" />
              <path d="M 2 0 L 28 18 L 28 40 L 2 22 Z" fill="#E3A72F" />
            </g>
          ))}
        </g>

        {/* Right Structure */}
        <g transform="translate(230, 0)">
          <rect x="-5" y="-25" width="6" height="20" fill="#C1272D" rx="2" />
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={`right-${i}`} transform={`translate(0, ${i * 28})`}>
              <path d="M -2 0 L -28 18 L -28 40 L -2 22 Z" fill="#C1272D" />
              <path d="M 2 0 L 28 18 L 28 40 L 2 22 Z" fill="#E3A72F" />
            </g>
          ))}
        </g>
      </g>

      {/* Text */}
      <g transform="translate(200, 240)" textAnchor="middle">
        <text y="0" fontFamily="'Nunito', system-ui, sans-serif" fontWeight="800" fontSize="48" fill="#C1272D" letterSpacing="-1">
          viana e moura
        </text>
        <text y="35" fontFamily="'Nunito', system-ui, sans-serif" fontWeight="800" fontSize="32" fill="#E3A72F" letterSpacing="-0.5">
          construções
        </text>
      </g>
    </svg>
  );
}
