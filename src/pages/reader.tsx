import Viewer from "../components/viewer";
import LeftSidebar from "../components/leftSidebar/leftSidebar";
import useReader, { ReaderState } from "../hooks/useReader";
import { createContext } from "react";
import Sidebar from "../components/sidebar/sidebar";
import { clsx } from "clsx";
import Bookshelf from "../components/bookshelf/bookshelf";

// This context is used to pass the state of the reader to the components
export const readerContext = createContext<ReaderState>(null as any);

// This page is the reader page
export default function Reader() {
  const readerState = useReader();
  return (
    <readerContext.Provider value={readerState}>
    <div className={clsx('h-screen flex fixed', readerState.colorTheme === 'light' ? 'bg-white text-black' : 'bg-black text-white')}>
      <LeftSidebar />
      { (readerState.leftSidebarOn === 'typography' || readerState.leftSidebarOn === 'toc') && <Sidebar /> }
      { readerState.url ? <Viewer /> : <Bookshelf /> }
    </div>
    </readerContext.Provider>
  )
}