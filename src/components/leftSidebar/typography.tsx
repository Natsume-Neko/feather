import { useContext } from "react";
import { RiFontSize } from "react-icons/ri";
import { clsx } from "clsx";
import { readerContext } from "../../pages/reader";

// This component is a button that opens the typography form
export default function Typography() {
  const { leftSidebarOn, setLeftSidebarOn, colorTheme } = useContext(readerContext);
  // This function is called when the user clicks the typography button
  const handleTypography = () => {
    if (leftSidebarOn === "typography") {
      setLeftSidebarOn(null);
    } else {
      setLeftSidebarOn("typography");
    }
  }

  return (
    <div className={clsx("px-2 py-2", leftSidebarOn === 'typography' && (colorTheme === 'light' ? 'bg-gray-100' : 'bg-gray-900'))}>
      <button className={clsx(leftSidebarOn === 'typography' && (colorTheme === 'light' ? 'text-black' : 'text-white'), colorTheme === 'light' ? 'hover:text-black' : 'hover:text-white')} onClick={() => handleTypography()}>
        <RiFontSize size={28} />
      </button>
    </div>
  )
}
