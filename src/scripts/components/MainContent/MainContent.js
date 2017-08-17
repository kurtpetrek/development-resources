import React, { Component } from "react";
import Landing from "./Landing.js";
import Welcome from "./Welcome.js";
import ArticleList from "./ArticleList.js";
import PropTypes from "prop-types";

class MainContent extends Component {
  render() {
    let navStatus = "";
    if (this.props.navStatus) {
      navStatus = "main-content-moved";
    }
    return (
      <section id="main-content" className={navStatus}>
        <Landing />
        <Welcome />
        <ArticleList articleData={this.props.articleData} />
      </section>
    );
  }
}

MainContent.propTypes = {
  navStatus: PropTypes.bool,
  articleData: PropTypes.object
};

export default MainContent;
