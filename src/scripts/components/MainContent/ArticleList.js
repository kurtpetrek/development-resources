import React, {Component} from 'react';
import ArticleItem from './ArticleItem.js'

class ArticleList extends Component {
  createItems = (arr) => {
    let newArr = [];
    arr.forEach(function(x, i){
      newArr.push(<ArticleItem data={x} key={i}/>);
    })
    return newArr;
  }

  render(){
    var data = this.props.articleData;

    return (
      <article className="resource-items">
        <h2 id="references">References</h2>
        {this.createItems(data.references)}

        <h2 id="tutorials">Tutorials</h2>
        {this.createItems(data.tutorials)}

        <h2 id="tutorial-videos">Tutorial Videos</h2>
        {this.createItems(data.tutorialVideos)}

        <h2 id="images">Images</h2>
        {this.createItems(data.images)}

        <h2 id="color">Color</h2>
        {this.createItems(data.color)}

        <h2 id="podcasts">Podcasts</h2>
        {this.createItems(data.podcasts)}

        <h2 id="exercises">Exercises</h2>
        {this.createItems(data.exercises)}

        <h2 id="ebooks">eBooks</h2>
        {this.createItems(data.ebooks)}

      </article>
    )
  }
}

export default ArticleList;
