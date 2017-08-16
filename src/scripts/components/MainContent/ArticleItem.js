import React, {Component} from 'react';

class ArticleItem extends Component {
  render(){
    var data = this.props.data;

    return (
      <div>
        <h3><a href={data.linkURL} target="_blank">{data.title}</a></h3>
        <p dangerouslySetInnerHTML={{ __html: data.description }} />
        <hr />
      </div>
    )
  }
}

export default ArticleItem;
