import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  textLabel: string;
  startIcon?: React.ReactNode; // Ícone no início do input
<<<<<<< HEAD
  endIcon?: React.ReactNode; // Ícone no final do input
=======
  endIcon?: React.ReactNode;
  textLabel?: string; // Ícone no final do input
>>>>>>> feature/ricardo
}

const InputText: React.FC<InputProps> = ({ textLabel, startIcon, endIcon, className, ...props }) => {
  return (
    <div className={`relative flex flex-col rounded-lg shadow-sm ${className || ''}`}>
      {startIcon && <span className="absolute left-3 bottom-2 text-gray-500">{startIcon}</span>}
      <label className="text-zinc-400 text-sm">{textLabel}</label>
      <input
        {...props}
        className={`w-full px-4 py-2 text-sm border-none text-white bg-black rounded-lg outline-none focus:outline-none ${
          startIcon ? 'pl-10' : ''
        } ${endIcon ? 'pr-10' : ''}`}
      />
      {endIcon && <span className="absolute right-3 bottom-2 text-gray-500">{endIcon}</span>}
    </div>
  );
};

export default InputText;
