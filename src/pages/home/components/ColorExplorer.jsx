function ColorExplorer() {
  const colorOptions = [
    { id: "red-pastel", name: "RED PASTEL", color: "#e86464" },
    { id: "lime-green", name: "LIME GREEN", color: "#c2e359" },
    { id: "navy-blue", name: "NAVY BLUE", color: "#2d3b6c" },
    { id: "clean-white", name: "CLEAN WHITE", color: "#f5f5f5" },
    { id: "blue-sky", name: "BLUE SKY", color: "#6bb5e8" },
    { id: "purple", name: "PURPLE", color: "#9c59e3" },
    { id: "pink", name: "PINK", color: "#e85986" },
    { id: "yellow", name: "YELLOW", color: "#f7ca4d" },
    { id: "dark-green", name: "DARK GREEN", color: "#2a7d5f" },
  ];

  return (
    <section className="px-16 pt-20 pb-8">
      <div className="flex items-center justify-between">
        <h1 className="text-6xl w-96">
          Explore <br />
          by Colors
        </h1>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((option) => (
            <button
              key={option.id}
              className={`flex items-center gap-2 px-4 border-black bg-gray-100 py-2 rounded-full border transition-all`}
            >
              <span
                className="w-5 h-5 rounded-full inline-block border border-gray-200"
                style={{ backgroundColor: option.color }}
                aria-hidden="true"
              ></span>
              <span className="font-medium">{option.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ColorExplorer; 