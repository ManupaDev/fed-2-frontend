import { useGetColorsQuery } from '@/lib/api';
import { useNavigate } from 'react-router';

function ColorExplorer() {
  const { data: colors, isLoading: colorsLoading } = useGetColorsQuery();
  const navigate = useNavigate();
  
  const handleColorClick = (colorSlug) => {
    navigate(`/shop?color=${colorSlug}`, { preventScrollReset: false });
  };
  
  return (
    <section className="px-16 pt-20 pb-8">
      <div className="flex items-center justify-between">
        <h1 className="text-6xl w-96">
          Explore <br />
          by Colors
        </h1>
        <div className="flex flex-wrap gap-2">
          {colors?.map((option) => (
            <button
              key={option._id}
              className={`flex items-center gap-2 px-4 border-black bg-gray-100 py-2 rounded-full border transition-all hover:bg-gray-200`}
              onClick={() => handleColorClick(option.slug)}
            >
              <span
                className="w-5 h-5 rounded-full inline-block border border-gray-200"
                style={{ backgroundColor: option.hexcode }}
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