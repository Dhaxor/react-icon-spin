import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./styles.css";

function App(): JSX.Element {
  const [rotate, setRotate] = useState<boolean>(true);
  const [iconSize, setIconSize] = useState<number>(50);
  const [lastMouseMove, setLastMouseMove] = useState<number>(Date.now());
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showRotation, setShowRotation] = useState<boolean>(true);
  const [showIconSize, setShowIconSize] = useState<boolean>(true);
  const [idleTime, setIdleTime] = useState<number>(0);
  const [showIdleTime, setShowIdleTime] = useState<boolean>(true);

  const handleClick = (): void => {
    setRotate(!rotate);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>): void => {
    // Constants for window height, window width, and maximum/minimum icon size
    const WINDOW_WIDTH = window.innerWidth;
    const MAX_SIZE = 100;
    const MIN_SIZE = 20;

    // Get x and y positions of the mouse
    const x = event.clientX;
    const y = event.clientY;

    // This function calculates the size of the icon based on the mouse position and window size
    const getSize = (value: number) =>
      Math.round((value * (MAX_SIZE - MIN_SIZE)) / WINDOW_WIDTH + MIN_SIZE);

    // Calculate the size of the icon based on the x and y positions of the mouse
    const size = getSize(x) + getSize(y);

    // Update the last mouse move time and the icon size
    setLastMouseMove(Date.now());
    setIconSize(size);
  };

  // This effect updates the title of the page to display the time since the last mouse movement
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIdleTime = Math.round((Date.now() - lastMouseMove) / 1000);
      setIdleTime(currentIdleTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [lastMouseMove]);

  const handleToggleRotation = (): void => {
    setShowRotation(!showRotation);
  };

  const handleToggleIconSize = (): void => {
    setShowIconSize(!showIconSize);
  };

  const handleToggleIdleTime = (): void => {
    setShowIdleTime(!showIdleTime);
  };

  const handleToggleSidebar = (): void => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <Sidebar
        showSidebar={showSidebar}
        showRotation={showRotation}
        showIconSize={showIconSize}
        showIdleTime={showIdleTime}
        handleToggleRotation={handleToggleRotation}
        handleToggleIconSize={handleToggleIconSize}
        handleToggleIdleTime={handleToggleIdleTime}
      />
      <Content
        rotate={rotate}
        showSidebar={showSidebar}
        showRotation={showRotation}
        iconSize={iconSize}
        showIconSize={showIconSize}
        handleClick={handleClick}
        idleTime={idleTime}
        handleToggleSidebar={handleToggleSidebar}
        showIdleTime={showIdleTime}
      />
    </div>
  );
}

export default App;

