import { useContext } from "react"
import { readerContext } from "../../pages/reader"
import TypographyForm from "../../forms/typographyForm";
import TocForm from "../../forms/tocForm";


export default function Sidebar() {
  // get the state of the reader from the context
  const { leftSidebarOn } = useContext(readerContext);

  // switch the content of the sidebar
  const switchSidebarContent = () => {
    switch (leftSidebarOn) {
      case 'typography': {
        return <TypographyForm />;
      }
      case 'toc': {
        return <TocForm />;
      }
    }
  };
  const sidebarContent = switchSidebarContent();

  return (
    <div className="w-60 flex flex-col border-r border-solid border-gray-200 overflow-scroll">
      {/* render the form based on the state of the reader */}
      {sidebarContent}
    </div>
  )
}