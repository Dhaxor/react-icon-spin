import { FaReact } from "react-icons/fa";
import "./styles.css";

interface ContentProps {
  rotate: boolean;
  showRotation: boolean;
  iconSize?: number;
  showIconSize: boolean;
  handleClick: () => void;
  idleTime: number;
  showIdleTime: boolean;
  showSidebar: boolean;
  handleToggleSidebar: () => void;
}

function Content({
  rotate,
  showRotation,
  iconSize,
  showIconSize,
  handleClick,
  idleTime,
  showIdleTime,
  showSidebar,
  handleToggleSidebar
}: ContentProps) {
  return (
    <>
      <div className="Content">
        <FaReact
          className={`App-logo${rotate && showRotation ? "" : "-reverse"}`}
          size={iconSize && showIconSize ? iconSize : undefined}
          onClick={handleClick}
        />
        <p>
          {showIdleTime && `the mouse has been idle for ${idleTime} seconds.`}
        </p>
      </div>
      <button className="ToggleSidebarButton" onClick={handleToggleSidebar}>
        {showSidebar ? "Hide Sidebar" : "Show Sidebar"}
      </button>
    </>
  );
}

export default Content;
