import styled from "styled-components";

const setOrientation = (props) => {
  if (typeof props.width === "undefined") props.width = "320px";

  if (props.orientation === "right") {
    // WHEN RIGHT, MAKE SURE SET BODY OVERFLOW HIDDEN
    return `
      right: -${props.width};
      transform: ${
        props.isOpen
          ? `translateX(-${props.width})`
          : `translateX(${props.width})`
      };
    `;
  }

  // LEFT DEFAULT ORIENTATION
  return `
   left: -${props.width};
   transform: ${
     props.isOpen ? `translateX(${props.width})` : `translateX(-${props.width})`
   };
 `;
};

const SidebarStyles = styled.div`
  position: absolute;
  top: 0;
  ${(props) => setOrientation(props)};
  width: ${(props) =>
    typeof props.width !== "undefined" ? props.width : "320px"};
  height: ${(props) =>
    typeof props.height !== "undefined" ? props.height : "100vh"};
  transition: transform
    ${(props) =>
      typeof props.transition !== "undefined" ? props.transition : "0.3s"};
  z-index: ${(props) =>
    typeof props.zIndex !== "undefined" ? props.zIndex : 100};
`;

const SidebarMask = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) =>
    typeof props.maskColor !== "undefined" ? props.maskColor : "#000"};
  opacity: ${(props) =>
    props.isOpen
      ? typeof props.maskOpacity !== "undefined"
        ? props.maskOpacity
        : "0.7"
      : "0"};
  transition: opacity 0.3s;
  z-index: ${(props) =>
    typeof props.maskzIndex !== "undefined" ? props.maskzIndex : 99};
`;

const SidebarColapse = ({ children, options, styles }) => {
  return (
    <>
      {
        /* options.isOpen ? ( */
        <SidebarMask
          isOpen={options.isOpen}
          maskColor={options.maskColor}
          maskOpacity={options.maskOpacity}
          style={options.maskStyles}
        ></SidebarMask>
        /*) : null */
      }

      <SidebarStyles {...options} style={styles}>
        {children}
      </SidebarStyles>
    </>
  );
};

export default SidebarColapse;
