import { MdOutlineToc } from "react-icons/md";
import { clsx } from "clsx";
import { useContext } from "react";
import { readerContext } from "../../pages/reader";

// TOC Button
export default function Toc() {
  const { colorTheme, setLeftSidebarOn, leftSidebarOn } = useContext(readerContext);

  // Handle the click of the TOC button
  const handleToc = () => {
    if (leftSidebarOn === 'toc') {
      setLeftSidebarOn(null);
    } else {
      setLeftSidebarOn('toc');
    }
  }
  return (
    <div className={clsx("px-2 py-2", leftSidebarOn === 'toc' && (colorTheme === 'light' ? 'bg-gray-100' : 'bg-gray-900'))}>
      <button 
        className={clsx(leftSidebarOn === 'toc' && (colorTheme === 'light' ? 'text-black' : 'text-white'), colorTheme === 'light' ? 'hover:text-black' : 'hover:text-white')} 
        onClick={handleToc}
      >
        <MdOutlineToc size={28} />
      </button>
    </div>
  )
}