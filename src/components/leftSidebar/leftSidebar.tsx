import { clsx } from "clsx";
import FileUpload from "./fileUpload";
import Theme from "./theme";
import Typography from "./typography";
import { useContext } from "react";
import { readerContext } from "../../pages/reader";
import Toc from "./toc";
import Home from "./home";

// This component is the left sidebar of the app
export default function LeftSidebar() {
  const { colorTheme } = useContext(readerContext);
  return (
    // set the width of the sidebar to be 12px
    <div className={clsx("w-12 flex flex-col border-r border-solid", colorTheme === 'light' ? 'text-gray-500 border-gray-200' : 'text-gray-200 border-gray-500')}>
      <Home />
      <Toc />
      <Typography />
      <Theme />
      <FileUpload />
    </div>
  )
}