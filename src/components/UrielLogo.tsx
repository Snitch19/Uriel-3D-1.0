import React from 'react';

interface UrielLogoProps {
  className?: string;
  size?: number | string;
  variant?: 'orange-bg' | 'monochrome' | 'orange-mark';
}

/**
 * Official Uriel Initiative Logo ("ui" community mark)
 * Three dots / figures forming "ui" with rounded U and tapered I
 */
export const UrielLogo: React.FC<UrielLogoProps> = ({
  className = '',
  size = 36,
  variant = 'orange-bg',
}) => {
  // If variant is 'orange-bg', we render the rounded orange square with white mark (exact match to uploaded poster)
  if (variant === 'orange-bg') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`rounded-xl shadow-xs overflow-hidden ${className}`}
      >
        {/* Warm Orange Brand Background */}
        <rect width="200" height="200" rx="44" fill="#EA580C" />

        {/* 3 Upper Dots */}
        <circle cx="56" cy="62" r="13" fill="#FFFFFF" />
        <circle cx="102" cy="62" r="13" fill="#FFFFFF" />
        <circle cx="146" cy="62" r="13" fill="#FFFFFF" />

        {/* "U" Shape */}
        <path
          d="M 43 89 
             A 13 13 0 0 1 69 89 
             V 102 
             C 69 110, 75 116, 83 116 
             C 91 116, 97 110, 97 102 
             V 89 
             A 13 13 0 0 1 123 89 
             V 108 
             C 123 128, 108 138, 83 138 
             C 58 138, 43 128, 43 108 
             Z"
          fill="#FFFFFF"
        />

        {/* "I" Tapered Shape */}
        <path
          d="M 133 89 
             A 13 13 0 0 1 159 89 
             C 159 98, 155 110, 148 138 
             C 142 110, 137 98, 133 89 
             Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // If variant is 'orange-mark' or 'monochrome'
  const fillColor = variant === 'orange-mark' ? '#EA580C' : 'currentColor';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 130 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 3 Upper Dots */}
      <circle cx="21" cy="20" r="11" fill={fillColor} />
      <circle cx="60" cy="20" r="11" fill={fillColor} />
      <circle cx="98" cy="20" r="11" fill={fillColor} />

      {/* "U" Shape */}
      <path
        d="M 10 43 
           A 11 11 0 0 1 32 43 
           V 54 
           C 32 61, 37 66, 44 66 
           C 51 66, 56 61, 56 54 
           V 43 
           A 11 11 0 0 1 78 43 
           V 59 
           C 78 76, 65 85, 44 85 
           C 23 85, 10 76, 10 59 
           Z"
        fill={fillColor}
      />

      {/* "I" Tapered Shape */}
      <path
        d="M 87 43 
           A 11 11 0 0 1 109 43 
           C 109 51, 105 61, 99 85 
           C 94 61, 90 51, 87 43 
           Z"
        fill={fillColor}
      />
    </svg>
  );
};
