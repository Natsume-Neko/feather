import useLeftSidebar from "./useLeftSidebar";
import useViewer from "./useViewer";

// This interface is used to define the state of the reader
export interface ReaderState {
  location: string | number;
  setLocation: React.Dispatch<React.SetStateAction<string | number>>;
  url: string | ArrayBuffer;
  setUrl: React.Dispatch<React.SetStateAction<string | ArrayBuffer>>;
  fileName: string;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  fontSize: string;
  setFontSize: React.Dispatch<React.SetStateAction<string>>;
  leftSidebarOn: null | string;
  setLeftSidebarOn: React.Dispatch<React.SetStateAction<null | string>>;
  colorTheme: string;
  setColorTheme: React.Dispatch<React.SetStateAction<string>>;
  chapterArray: any[];
  setChapterArray: React.Dispatch<React.SetStateAction<any[]>>;
}

// This hook is used to manage the state of the reader
export default function useReader() {
  const viewer = useViewer();
  const leftSidebar = useLeftSidebar();
  // merge the state of the viewer and the left sidebar
  return {
    ...viewer,
    ...leftSidebar
  };
}