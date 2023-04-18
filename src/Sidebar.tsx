import React, { FC } from "react";
import "./styles.css";

interface SidebarProps {
  showRotation: boolean;
  showIconSize: boolean;
  showIdleTime: boolean;
  showSidebar: boolean;
  handleToggleRotation: () => void;
  handleToggleIconSize: () => void;
  handleToggleIdleTime: () => void;
}

const Sidebar: FC<SidebarProps> = ({
  showRotation,
  showIconSize,
  showIdleTime,
  showSidebar,
  handleToggleRotation,
  handleToggleIconSize,
  handleToggleIdleTime
}) => {
  return (
    <>
      {showSidebar && (
        <div className="Sidebar">
          <h2>Options</h2>
          <div>
            <input
              type="checkbox"
              checked={showRotation}
              onChange={handleToggleRotation}
            />
            <label htmlFor="show-rotation">Show rotation</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={showIconSize}
              onChange={handleToggleIconSize}
            />
            <label htmlFor="show-icon-size">Show icon size</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={showIdleTime}
              onChange={handleToggleIdleTime}
            />
            <label htmlFor="show-idle-time">Show idle time</label>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
