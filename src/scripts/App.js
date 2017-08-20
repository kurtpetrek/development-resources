import React, { Component } from "react";
import Layout from "./components/Layout.js";
import data from "./data.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
      data
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
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
