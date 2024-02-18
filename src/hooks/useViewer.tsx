import React, { useState } from "react";

// This interface is used to define the state of the viewer
export interface ViewerState {
  location: string | number;
  setLocation: React.Dispatch<React.SetStateAction<string | number>>;
  url: string | ArrayBuffer;
  setUrl: React.Dispatch<React.SetStateAction<string | ArrayBuffer>>;
  fileName: string;
  setFileName: React.Dispatch<React.SetStateAction<string>>;
  fontSize: string;
  setFontSize: React.Dispatch<React.SetStateAction<string>>;
  chapterArray: any[];
  setChapterArray: React.Dispatch<React.SetStateAction<any[]>>;
}


// This hook is used to manage the state of the viewer
export default function useViewer() {
  // location is the state of the location of the viewer
  const [location, setLocation] = useState<string | number>(0);
  // url is the state of the url of the viewer
  const [url, setUrl] = useState<string | ArrayBuffer >('');
  // fileName is the state of the file name of the viewer
  const [fileName, setFileName] = useState<string>('');
  // fontSize is the state of the font size of the viewer
  const [fontSize, setFontSize] = useState<string>('16px');
  // chapterArray is the state of the chapter array of the viewer
  const [chapterArray, setChapterArray] = useState<any[]>([]);
  return {
    location,
    setLocation,
    url,
    setUrl,
    fileName,
    setFileName,
    fontSize,
    setFontSize,
    chapterArray,
    setChapterArray,
  };
}