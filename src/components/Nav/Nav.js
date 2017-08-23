import React, { Component } from "react";
import PropTypes from "prop-types";

function NavItem(props) {
  return (
    <li>
      <a href={props.link} onClick={props.clickHandler}>
        {props.title}
      </a>
    </li>
  );
}

NavItem.propTypes = {
  link: PropTypes.string,
  clickHandler: PropTypes.func,
  title: PropTypes.string
};

class Nav extends Component {
  render() {
    let navStatus;
    if (this.props.navOpen) {
      navStatus = "open";
    } else {
      navStatus = "closed";
    }

    const data = this.props.data;

    return (
      <nav id="top-nav">
        <a href="#top" className="nav-brand">
          Dev Resources
        </a>
        <div className="top-nav-right">
          <div id="nav-toggle" onClick={this.props.handleToggle}>
            <div className={"hamburger " + navStatus}>
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <ul id="main-nav-items" className={navStatus}>
          {Object.keys(data).map(itemKey => {
            let item = data[itemKey];
            return (
              <NavItem
                key={itemKey}
                link={`#${itemKey}`}
                clickHandler={this.props.handleToggle}
                title={item.title}
              />
            );
          })}
        </ul>
      </nav>
    );
  }
}

Nav.propTypes = {
  navOpen: PropTypes.bool,
  handleToggle: PropTypes.func,
  data: PropTypes.object
};

export default Nav;
