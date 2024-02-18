import { MdOutlineHome } from "react-icons/md";
import { useContext } from "react";
import { readerContext } from "../../pages/reader";
import { clsx } from "clsx";


export default function Home() {
  const { leftSidebarOn, colorTheme, setLeftSidebarOn, setUrl } = useContext(readerContext);

  // handle the click event of the home button
  const handleHome = () => {
    if (leftSidebarOn === 'home') {
      return;
    } else {
      setLeftSidebarOn('home');
      setUrl('');
    }
  }

  return (
    <div className={clsx("px-2 py-2", leftSidebarOn === 'home' && (colorTheme === 'light' ? 'bg-gray-100' : 'bg-gray-900'))}>
      <button 
        className={clsx(leftSidebarOn === 'home' && (colorTheme === 'light' ? 'text-black' : 'text-white'), colorTheme === 'light' ? 'hover:text-black' : 'hover:text-white')} 
        onClick={handleHome}
      >
        <MdOutlineHome size={28} />
      </button>
    </div>
  )
}