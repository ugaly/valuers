// import React from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
// import { Col } from "shards-react";

// import SidebarMainNavbar from "./SidebarMainNavbar";
// import SidebarSearch from "./SidebarSearch";
// import SidebarNavItems from "./SidebarNavItems";
// import sidebarItems from "../../../data/sidebar-nav-items";

// import { Store } from "../../../flux";

// class MainSidebar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       menuVisible: false,
//       sidebarNavItems: Store.getSidebarItems()
//     };

//     this.onChange = this.onChange.bind(this);
//   }

//   componentWillMount() {
//     Store.addChangeListener(this.onChange);
//   }

//   componentWillUnmount() {
//     Store.removeChangeListener(this.onChange);
//   }

//   onChange() {
//     this.setState({
//       ...this.state,
//       menuVisible: Store.getMenuState(),
//       sidebarNavItems: Store.getSidebarItems()
//     });
//   }

//   render() {
//     const classes = classNames(
//       "main-sidebar",
//       "px-0",
//       "col-12",
//       this.state.menuVisible && "open"
//     );

//     return (
//       <Col
//         tag="aside"
       
//         className={classes}
//         lg={{ size: 2 }}
//         md={{ size: 3 }}
//       >
//         <SidebarMainNavbar hideLogoText={this.props.hideLogoText} />
//         <SidebarSearch />
//         <SidebarNavItems items={sidebarItems} />
//       </Col>
//     );
//   }
// }

// MainSidebar.propTypes = {
//   /**
//    * Whether to hide the logo text, or not.
//    */
//   hideLogoText: PropTypes.bool
// };

// MainSidebar.defaultProps = {
//   hideLogoText: false
// };

// export default MainSidebar;



import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col } from "shards-react";

import SidebarMainNavbar from "./SidebarMainNavbar";
import SidebarSearch from "./SidebarSearch";
import SidebarNavItems from "./SidebarNavItems";

import { Store } from "../../../flux";

class MainSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuVisible: false,
      activeItem: null, // Track the active item for hover effect
      sidebarNavItems: Store.getSidebarItems(),
    };

    this.onChange = this.onChange.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      menuVisible: Store.getMenuState(),
      sidebarNavItems: Store.getSidebarItems(),
    });
  }

  handleMouseEnter(item) {
    this.setState({ activeItem: item });
  }

  handleMouseLeave() {
    this.setState({ activeItem: null });
  }

  render() {
    const classes = classNames(
      "main-sidebar",
      "px-0",
      "col-12",
      this.state.menuVisible && "open"
    );

    return (
      <Col tag="aside" className={classes} lg={{ size: 2 }} md={{ size: 3 }}>
        <SidebarMainNavbar hideLogoText={this.props.hideLogoText} />
        <SidebarSearch />
        <SidebarNavItems
          items={this.state.sidebarNavItems}
          activeItem={this.state.activeItem}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
      </Col>
    );
  }
}

MainSidebar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool,
};

MainSidebar.defaultProps = {
  hideLogoText: false,
};

export default MainSidebar;
