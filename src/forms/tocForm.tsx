import { useContext } from "react";
import { readerContext } from "../pages/reader";
import { clsx } from "clsx";


// TOC Form
export default function TocForm() {
  const { colorTheme, setLocation, chapterArray, fileName } = useContext(readerContext);
  return (
    <div className="flex flex-col">
      <p className={clsx("text-sm px-2 py-2 border-b border-b-gray-500 font-mono mb-3", colorTheme === 'light' ? 'text-black' : 'text-white')}>TOC</p>
    {
      // Map through the chapter array and create a button for each chapter
      chapterArray.map(({id, href, label}) => {
        return (
          <button 
            className={clsx('block w-full text-left pl-2 py-1 text-sm font-serif border-b', colorTheme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-500')} 
            onClick={() => {
              // set the location of the epub file to the location of the chapter
              setLocation(href);
              // save the location of the chapter to the local storage
              localStorage.setItem(fileName + 'location', href);
            }}>
            {label}
          </button>
        )
      })
    }
    </div>
  )
}