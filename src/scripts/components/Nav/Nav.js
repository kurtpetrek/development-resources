import React, { Component } from 'react';

class Nav extends Component {
  render(){
    let navStatus;
    if (this.props.navOpen) {
      navStatus = 'open';
    } else {
      navStatus = 'closed';
    }

    return (
      <nav id="top-nav">
      <a href="#top" className="nav-brand">Dev Resources</a>
          <div className="top-nav-right">
            <div id="nav-toggle" onClick={this.props.handleToggle}>
              <div className={"hamburger " + navStatus}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <ul id="main-nav-items" className={navStatus}>
            <li>
              <a href="#references" onClick={this.props.handleToggle}>References</a>
            </li>
            <li>
              <a href="#tutorials" onClick={this.props.handleToggle}>Tutorials</a>
            </li>
            <li>
              <a href="#tutorial-videos" onClick={this.props.handleToggle}>Tutorial Videos</a>
            </li>
            <li>
              <a href="#images" onClick={this.props.handleToggle}>Images</a>
            </li>
            <li>
              <a href="#color" onClick={this.props.handleToggle}>Color</a>
            </li>
            <li>
              <a href="#podcasts" onClick={this.props.handleToggle}>Podcasts</a>
            </li>
            <li>
              <a href="#exercises" onClick={this.props.handleToggle}>Exercises</a>
            </li>
            <li>
              <a href="#ebooks" onClick={this.props.handleToggle}>ebooks</a>
            </li>
          </ul>
      </nav>
    )
  }
}

export default Nav;
