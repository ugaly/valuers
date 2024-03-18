// import React from "react";
// import PropTypes from "prop-types";
// import { NavLink as RouteNavLink } from "react-router-dom";
// import { NavItem, NavLink } from "shards-react";

// const SidebarNavItem = ({ item }) => (
//   <NavItem>
//     <NavLink tag={RouteNavLink} to={item.to}>
//       {item.htmlBefore && (
//         <div

//           className="d-inline-block item-icon-wrapper"
//           dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
//         />
//       )}
//       {item.title && <span style={{fontSize: "16px"}}>{item.title}</span>}
//       {item.htmlAfter && (
//         <div

//           className="d-inline-block item-icon-wrapper"
//           dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
//         />
//       )}
//     </NavLink>
//   </NavItem>
// );

// SidebarNavItem.propTypes = {
//   /**
//    * The item object.
//    */
//   item: PropTypes.object
// };

// export default SidebarNavItem;


import React from "react";
import PropTypes from "prop-types";
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink, Nav } from "shards-react";

const SidebarNavItem = ({ item, isActive, level }) => {
  const itemStyle = {
    marginLeft: level > 0 ? `${level * 20}px` : 0, // Adjust the margin based on the nesting level
    PointerEvents: "none",
  };

  return (
    <NavItem style={itemStyle}>
      {item.to ? (
        <NavLink tag={RouteNavLink} to={item.to} active={isActive}>
          {item.htmlBefore && (
            <div
              className="d-inline-block item-icon-wrapper"
              dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
            />
          )}
          {/* {item.title && <span style={{ fontSize: "16px" }}>{item.title}</span>} */}
          {item.title && (
            <span className="router-title" style={item.title === "Dashboard" ? { fontSize: "20px", fontWeight: "bold" } : {fontSize: "16px"}}>
              {item.title}
            </span>
          )}

          {item.htmlAfter && (
            <div
              className="d-inline-block item-icon-wrapper"
              dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
            />
          )}
        </NavLink>
      ) : (
        <NavLink className="sidebar-title">
          {item.htmlBefore && (
            <div
              className="d-inline-block item-icon-wrapper"
              dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
            />
          )}
          {item.title && (
            <span className="font-weight-bold pointer-events-none" style={{ fontSize: "20px", }}>
              {item.title}
            </span>
          )}
          {item.htmlAfter && (
            <div
              className="d-inline-block item-icon-wrapper"
              dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
            />
          )}
        </NavLink>
      )}
      {item.items && (
        <Nav vertical>
          {item.items.map((subItem, idx) => (
            <SidebarNavItem
              key={idx}
              item={subItem}
              isActive={isActive && subItem.to === item.to}
              level={level + 2} // Increase the nesting level
            />
          ))}
        </Nav>
      )}
    </NavItem>
  );
};

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object,
  /**
   * Whether the item is active.
   */
  isActive: PropTypes.bool,
  /**
   * The nesting level of the item.
   */
  level: PropTypes.number,
};

SidebarNavItem.defaultProps = {
  level: 0,
};

export default SidebarNavItem;
