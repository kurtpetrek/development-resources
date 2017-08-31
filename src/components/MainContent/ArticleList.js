import React, { Component } from "react";
import ArticleItem from "./ArticleItem.js";
import PropTypes from "prop-types";

function ArticleSection(props) {
  const section = props.section;
  return (
    <div>
      <h2 id={props.sectionKey}>
        {section.title}
      </h2>
      {section.items.map(item => {
        return <ArticleItem data={item} key={item.title} />;
      })}
    </div>
  );
}

ArticleSection.propTypes = {
  section: PropTypes.object
};

class ArticleList extends Component {
  render() {
    var data = this.props.data;

    return (
      <article className="resource-items">
        {Object.keys(data).map(sectionKey => {
          return (
            <ArticleSection
              key={`article-${sectionKey}`}
              section={data[sectionKey]}
              sectionKey={sectionKey}
            />
          );
        })}
      </article>
    );
  }
}

ArticleList.propTypes = {
  data: PropTypes.object
};

export default ArticleList;
