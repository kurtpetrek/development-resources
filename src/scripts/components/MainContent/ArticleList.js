import React, { Component } from "react";
import ArticleItem from "./ArticleItem.js";
import PropTypes from "prop-types";

function ArticleSection(props) {
  const section = props.section;
  return (
    <div>
      <h2 id={section}>References</h2>
      {section.items.map(item => {
        <ArticleItem data={item} key={item.title} />;
      })}
    </div>
  );
}

ArticleSection.propTypes = {
  section: PropTypes.obj
};

class ArticleList extends Component {
  render() {
    var data = this.props.data;

    return (
      <article className="resource-items">
        {Object.keys(data).map(sectionKey => {
          <ArticleSection
            key={`article-${sectionKey}`}
            section={data[sectionKey]}
          />;
        })}
      </article>
    );
  }
}

ArticleList.propTypes = {
  data: PropTypes.object
};

export default ArticleList;
