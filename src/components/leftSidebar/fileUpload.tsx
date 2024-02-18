import React from 'react';
import { MdOutlineFileUpload } from "react-icons/md";
import { useContext } from 'react';
import { readerContext } from '../../pages/reader';
import { clsx } from 'clsx';
import { fetchBook, saveBook } from '../../lib/bookStorage';



// This component is a button that opens a epub file
export default function FileUpload() {
  const { setUrl, setLocation, colorTheme, setFileName, setLeftSidebarOn } = useContext(readerContext);
  // This function is called when the user uploads a file
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileName = file.name;
      // check if the file is a epub file
      if (!fileName.endsWith('.epub')) return;
      // check if the file is already in the local storage and add it if it is not
      const rawFeatherBookArray = localStorage.getItem('featherBookArray');
      if (!rawFeatherBookArray) {
        localStorage.setItem('featherBookArray', JSON.stringify([fileName.slice(0, -5)]));
      } else {
        const featherBookArray: [string] = JSON.parse(rawFeatherBookArray);
        if (!featherBookArray.includes(fileName.slice(0, -5))) {
          localStorage.setItem('featherBookArray', JSON.stringify([...featherBookArray, fileName.slice(0, -5)]));
        }
      }
      setFileName(fileName);
      // check if the file is already in the local storage and fetch it if it is
      const fetchResult = await fetchBook(fileName.slice(0, -5));
      if (!fetchResult) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          await saveBook(e.target?.result as ArrayBuffer, fileName.slice(0, -5));
          // set the left sidebar to null
          setLeftSidebarOn(null);
          // set the url of the viewer
          setUrl(e.target?.result as ArrayBuffer);
          // set the location of the viewer
          setLocation(localStorage.getItem(fileName + 'location') || 0);
        }
        reader.readAsArrayBuffer(file);
      }
      else {
        setLeftSidebarOn(null);
        setUrl(fetchResult);
        setLocation(localStorage.getItem(fileName + 'location') || 0);
      }
    }
  };

  return (
    // This button is used to open a epub file
    <div className='px-2 py-2'>
      <label className={clsx('inline' ,'hover:cursor-pointer', colorTheme === 'light' ? 'hover:text-black' : 'hover:text-white')} htmlFor="epub-upload">
        <MdOutlineFileUpload size={28} />
      </label>
      <input className='hidden' type="file" id='epub-upload' accept='.epub' onChange={handleFileUpload} />
    </div>
  );
}