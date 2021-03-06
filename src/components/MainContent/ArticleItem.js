import React, { Component } from "react";
import PropTypes from "prop-types";

class ArticleItem extends Component {
  render() {
    var data = this.props.data;

    return (
      <div>
        <h3>
          <a href={data.linkURL} target="_blank" rel="noopener noreferrer">
            {data.title}
          </a>
        </h3>
        <p dangerouslySetInnerHTML={{ __html: data.description }} />
        <hr />
      </div>
    );
  }
}

ArticleItem.propTypes = {
  data: PropTypes.object
};

export default ArticleItem;
