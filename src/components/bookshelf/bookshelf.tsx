import { useContext } from "react"
import { clsx } from "clsx"
import { readerContext } from "../../pages/reader"
import { fetchBook } from "../../lib/bookStorage"

// This component is the bookshelf of the app
export default function Bookshelf() {
  const { leftSidebarOn, colorTheme, setUrl, setLocation, setLeftSidebarOn } = useContext(readerContext);
  const rawFeatherBookArray = localStorage.getItem('featherBookArray');
  const featherBookArray: [string] = rawFeatherBookArray ? JSON.parse(rawFeatherBookArray) : [];

  // Handle the click of a book
  const handleBookClick = async (bookName: string) => {
    const fetchResult = await fetchBook(bookName);
    if (fetchResult) {
      setLeftSidebarOn(null);
      setUrl(fetchResult);
      setLocation(localStorage.getItem(bookName + '.epublocation') || 0);
    }
  }

  return (
    <div className={clsx('100vh flex flex-col', (leftSidebarOn === 'typography' || leftSidebarOn === 'toc') ? 'viewer-width-with-sidebar' : 'viewer-width', colorTheme === 'black' && 'bg-black text-white')}>
      <p className='text-xl border-b border-b-gray-200 font-mono px-4 pt-4'>Bookshelf</p>
      <div className="flex flex-row scroll h-full">
        {
          // map the book array to a list of book buttons
          featherBookArray.map((bookName) => {
            return (
              <div className='w-36 h-52 mt-5 ml-5'>
                <button className='block h-full w-full border-2 border-gray-400' onClick={() => handleBookClick(bookName)}>
                  {bookName}
                </button>
                <p className='text-center'>{bookName}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}