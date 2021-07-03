import { useState } from "react";
import SidebarColapse from "./SidebarColpase";

import "./SidebarColapseHandled.css";

const SidebarColapseHandled = () => {
  const [openSidebar, setOpenSidebar] = useState({
    defaultSidebar: false,
    leftSidebar: false,
    rightSidebar: false
  });

  const handleSidebarToggle = (ori) => {
    //console.log(ori, openSidebar[`${ori}Sidebar`]);
    setOpenSidebar({
      ...openSidebar,
      [`${ori}Sidebar`]: !openSidebar[`${ori}Sidebar`]
    });
  };
  return (
    <>
      {/* DEFAULT SIDEBAR */}
      <SidebarColapse options={{ isOpen: openSidebar.defaultSidebar }}>
        <div className="the-default">
          DEFAULT OPTIONS WITHOUT PARAMS!! <br />
          <br />
          <br />
          <small>...well just 1 param but we are ok, right?</small>
        </div>
      </SidebarColapse>

      {/* LEFT SIDEBAR */}
      <SidebarColapse
        options={{
          isOpen: openSidebar.leftSidebar,
          orientation: "left",
          height: "100vh",
          width: "620px",
          transition: ".8s",
          maskColor: "salmon",
          maskOpacity: 0.5
        }}
        styles={{
          backgroundColor: "blue",
          color: "lime",
          padding: "2rem",
          fontSize: "25px"
        }}
      >
        Edit to see some magic happen!
      </SidebarColapse>

      {/* RIGHT SIDEBAR */}
      <SidebarColapse
        options={{
          isOpen: openSidebar.rightSidebar,
          orientation: "right",
          height: "50vh",
          width: "120px",
          transition: "0.5s",
          maskColor: "#000",
          maskOpacity: 0.5
        }}
        styles={{
          backgroundColor: "blue",
          border: "2px solid pink",
          color: "pink",
          padding: "1rem",
          fontSize: "35px"
        }}
      >
        Edit to see some magic happen!
      </SidebarColapse>

      {/* Toggle Buttons */}
      <div className="button-container">
        <button
          className="button-toggle"
          onClick={() => handleSidebarToggle("default")}
        >
          Toggle Left (default)
        </button>

        <button
          className="button-toggle"
          onClick={() => handleSidebarToggle("left")}
        >
          Toggle Left
        </button>

        <button
          className="button-toggle"
          onClick={() => handleSidebarToggle("right")}
        >
          Toggle Right
        </button>
      </div>
    </>
  );
};

export default SidebarColapseHandled;
