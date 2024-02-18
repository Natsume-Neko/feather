import { useContext, useEffect, useState } from "react";
import { readerContext } from "../pages/reader";
import { clsx } from "clsx";

// This component is a form for changing the font size of the viewer
export default function TypographyForm() {
  const { setFontSize, colorTheme } = useContext(readerContext);
  const [ fontSizeState, setFontSizeState ] = useState<string>('16');

  // This function is used to handle the form submission
  const handleTypographyForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fontSizeNumber = Number(fontSizeState);
    if (isNaN(fontSizeNumber)) return;
    if (fontSizeNumber < 10 || fontSizeNumber > 30) return;
    setFontSize(fontSizeState + 'px');
    localStorage.setItem('fontSize', fontSizeState);
  }
  // This function is used to handle the font size input change
  const handleFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSizeState(e.target.value);
  }
  // This function is used to reset the font size
  const handleTypographyReset = () => {
    setFontSize('16px');
    setFontSizeState('16');
    localStorage.setItem('fontSize', '16');
  }
  // This effect is used to set the font size from the local storage
  useEffect(() => {
    const localFontSize = localStorage.getItem('fontSize');
    if (localFontSize) {
      setFontSize(localFontSize + 'px');
      setFontSizeState(localFontSize);
    }
  }, [setFontSize, setFontSizeState])

  return (
    // This form is used to change the typography of the viewer
    <form className="flex flex-col font-serif" onSubmit={(e) => handleTypographyForm(e)}>
      {/* This is the title of the form */}
      <p className={clsx("text-sm px-2 py-2 border-b border-b-gray-200 font-mono", colorTheme === 'light' ? 'text-black' : 'text-white')}>Typography</p>
      <div className="flex flex-col justify-between ml-4 mt-4">
        {/* This is the font size input */}
        <label className="text-gray-500 text-sm" htmlFor="fontSize">Font Size</label>
        <input type="text" name="fontSize" autoComplete="off" className={clsx("border border-solid border-gray-200 rounded-md px-2 py-1 text-gray-500 text-sm w-48", colorTheme === 'dark' && 'bg-gray-300')} value={fontSizeState} onChange={handleFontSize} />
      </div>
      <div className="flex flex-row justify-center">
        {/* This is the save button */}
        <button type="submit" className={clsx("text-sm rounded px-2 py-1 mt-2", colorTheme === 'light' ? 'bg-gray-200' : 'bg-gray-500')}>Save</button>
        {/* This is the reset button */}
        <button type='button' className={clsx("text-sm rounded px-2 py-1 mt-2", colorTheme === 'light' ? 'bg-gray-200' : 'bg-gray-500')} onClick={handleTypographyReset}>Reset</button>
      </div>
    </form>
  )
}