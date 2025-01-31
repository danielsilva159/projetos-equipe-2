'use client'
import React from 'react';

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  endIcon?: React.ReactNode;
  placeholder?: string;
}

const InputSearch: React.FC<SearchProps> = ({ placeholder, endIcon, className, ...props }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={`relative ${className}`}>
      <input
        className={`transition-all duration-200 ease-out h-10 bg-zinc-900 rounded-full p-0 text-zinc-400 cursor-pointer ${isFocused ? 'w-96' : 'w-10'}`}
        type="text"
        placeholder={placeholder}
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {endIcon && <div className="absolute right-2 top-1/2 transform -translate-y-1/2">{endIcon}</div>}
    </div>
  );
};

export default InputSearch;
