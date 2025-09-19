function Input({
  placeholder,
  onChange,
  valid,
}: {
  placeholder: string;
  onChange: (value: number) => void;
  valid?: boolean;
}) {
  return (
    <div
      className={`flex items-center w-[90px] h-[45px] outline-none rounded-xl border-2 ${valid ? "border-gray-200" : "border-red-400"}`}
    >
      <input
        type="number"
        placeholder={placeholder}
        onChange={(e) => onChange(Number(e.target.value))}
        className="outline-0 w-[70px] pl-2"
      />
      <p className="font-bold">₸</p>
    </div>
  );
}

export default Input;
