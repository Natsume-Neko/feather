import React, { useState } from "react";

// This interface is used to define the state of the left sidebar
export interface LeftSidebarState {
  leftSidebarOn: null | string;
  setLeftSidebarOn: React.Dispatch<React.SetStateAction<null | string>>;
  colorTheme: string;
  setColorTheme: React.Dispatch<React.SetStateAction<string>>;
}

// This hook is used to manage the state of the left sidebar
export default function useLeftSidebar() {
  // leftSidebarOn is the state of the left sidebar
  const [ leftSidebarOn, setLeftSidebarOn ] = useState<null | string>('home');
  // colorTheme is the state of the color theme
  const [ colorTheme, setColorTheme ] = useState<string>('light');
  return {
    leftSidebarOn,
    setLeftSidebarOn,
    colorTheme,
    setColorTheme
  };
}