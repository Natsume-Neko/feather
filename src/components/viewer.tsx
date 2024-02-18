import React, { useContext, useEffect, useRef } from 'react';
import { ReactReader } from "react-reader";
import '../global.css';
import { readerContext } from '../pages/reader';
import { clsx } from 'clsx';
import { lightReaderTheme, darkReaderTheme } from '../constants/readerThemes';


// This component is a epub viewer
export default function Viewer() {

  // get the state of the viewer from the context
  const { location, setLocation, url, fontSize, leftSidebarOn, colorTheme, setChapterArray, fileName } = useContext(readerContext);
  const rendition = useRef<any>(null);
  // get the toc of the book
  const getToc = (toc: any) => {
    setChapterArray(toc);
  };

  useEffect(() => {
    // set the font size of the viewer
    rendition.current?.themes.fontSize(fontSize);
    // set the color theme of the viewer
    switch (colorTheme) {
      case 'dark': {
        rendition.current?.themes.override('color', '#fff');
        rendition.current?.themes.override('background', '#000');
        break;
      }
      case 'light': {
        rendition.current?.themes.override('color', '#000');
        rendition.current?.themes.override('background', '#fff');
        break;
      }
    }
  }, [fontSize, url, colorTheme])
  
  useEffect(() => {
    // resize the viewer when the sidebar is toggled
    rendition.current?.resize({ width: '100%', height: '100vh' });
  }, [leftSidebarOn])

  return (
    // set the width of the viewer
    <div className={clsx('100vh', (leftSidebarOn === 'typography' || leftSidebarOn === 'toc') ? 'viewer-width-with-sidebar' : 'viewer-width')}>
      {/* This component is the epub viewer */}
      <ReactReader
        url={url}
        title={fileName}
        location={location}
        locationChanged={(epubcfi: string) => {
          // set the location of the viewer
          setLocation(epubcfi);
          // save the location of the viewer to the local storage
          localStorage.setItem(fileName + 'location', epubcfi);
        }}
        showToc={false}
        tocChanged={getToc}
        readerStyles={colorTheme === 'light' ? lightReaderTheme : darkReaderTheme}
        getRendition={(_rendition: any) => {
          rendition.current = _rendition;
          rendition.current?.themes.fontSize(fontSize);
          switch (colorTheme) {
            case 'dark': {
              rendition.current?.themes.override('color', '#fff');
              rendition.current?.themes.override('background', '#000');
              break;
            }
            case 'light': {
              rendition.current?.themes.override('color', '#000');
              rendition.current?.themes.override('background', '#fff');
              break;
            }
          }
        }}
      />
    </div>
  )
}