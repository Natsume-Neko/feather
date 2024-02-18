import { useContext } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { readerContext } from "../../pages/reader";
import { clsx } from "clsx";

// This component is a button that changes the theme
export default function Theme() {
  const { colorTheme, setColorTheme } = useContext(readerContext);

  // This function is called when the user clicks the theme button
  const handleTheme = () => {
    if (colorTheme === "light") {
      setColorTheme("dark");
    } else {
      setColorTheme("light");
    }
  }

  return (
    <div className="px-2 py-2">
      <button className={clsx(colorTheme === 'light' ? 'hover:text-black' : 'hover:text-white')} onClick={() => handleTheme()}>
        {
          // This icon changes depending on the theme
          colorTheme === "light" ? 
          <MdOutlineLightMode size={28} /> : 
          <MdOutlineNightlight size={28} />
        }
      </button>
    </div>
  )
}