import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description} = this.props;

    return (
        <div className="card" style={{width: "18rem"}}>
        <img src="public\Photo_Ram_Yewale.jpg" className="card-img-top" alt="image can't display" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}.</p>
          <a href="/#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
}

export default NewsItem