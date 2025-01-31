interface InputSelectProps {
  options: Array<{ value: string, label: string }>;
}

const InputSelect = ({ options }: InputSelectProps) => {
  return (
    <div className="w-full pl-11 pr-2">
      <select className="bg-zinc-800 py-1 px-2 rounded-md text-zinc-400 focus:outline-none w-full">
        <option value="">Perfil de acesso</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}


export default InputSelect