import React, { Component } from "react";
import Nav from "./Nav/Nav.js";
import MainContent from "./MainContent/MainContent.js";
import PropTypes from "prop-types";

class Layout extends Component {
  render() {
    return (
      <div>
        <Nav navOpen={this.props.navOpen} handleToggle={this.props.toggleNav} />
        <MainContent
          navStatus={this.props.navOpen}
          articleData={this.props.articleData}
        />
      </div>
    );
  }
}

Layout.propTypes = {
  navOpen: PropTypes.bool,
  toggleNav: PropTypes.func,
  articleData: PropTypes.object
};

export default Layout;
