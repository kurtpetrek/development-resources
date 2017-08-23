import React, { Component } from "react";
import Nav from "./Nav/Nav.js";
import MainContent from "./MainContent/MainContent.js";
import PropTypes from "prop-types";

class Layout extends Component {
  render() {
    return (
      <div>
        <Nav
          navOpen={this.props.navOpen}
          handleToggle={this.props.toggleNav}
          data={this.props.data}
        />
        <MainContent navStatus={this.props.navOpen} data={this.props.data} />
      </div>
    );
  }
}

Layout.propTypes = {
  navOpen: PropTypes.bool,
  toggleNav: PropTypes.func,
  data: PropTypes.object
};

export default Layout;
