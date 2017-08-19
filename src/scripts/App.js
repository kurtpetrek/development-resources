import React, { Component } from "react";
import Layout from "./components/Layout.js";
import articleData from "./data.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
      articleData
    };
  }

  toggleNav = () => {
    var navStatus = !this.state.navOpen;
    this.setState({
      navOpen: navStatus
    });
  };

  render() {
    return (
      <div id="top">
        <Layout
          navOpen={this.state.navOpen}
          toggleNav={this.toggleNav}
          articleData={this.state.articleData}
        />
      </div>
    );
  }
}

export default App;
