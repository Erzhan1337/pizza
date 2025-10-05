function Toggle({
  selected,
  options,
  availableOptions,
  onChange,
}: {
  selected: string;
  options: Array<string>;
  availableOptions?: Array<string>;
  onChange: (selected: string) => void;
}) {
  const selectedIndex = options.indexOf(selected);

  return (
    <div className="flex items-center bg-[#ECECEC] rounded-2xl p-1 relative mb-1 lg:mb-2 xl:mb-3">
      <div
        className="absolute top-1 bottom-1 bg-white rounded-2xl transition-all duration-300 ease-in-out"
        style={{
          left: `calc(${selectedIndex * (100 / options.length)}% + 4px)`,
          width: `calc(${100 / options.length}% - 8px)`,
        }}
      />
      {options.map((option, index) => {
        const isAvailable =
          !availableOptions || availableOptions.includes(option);

        return (
          <button
            className={`text-xs md:text-sm lg:text-base flex-1 rounded-2xl md:py-2 text-center transition-colors duration-300 relative z-10 font-medium ${
              isAvailable ? "cursor-pointer" : "cursor-not-allowed opacity-40"
            }`}
            key={index}
            onClick={() => isAvailable && onChange(option)}
            disabled={!isAvailable}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Toggle;
