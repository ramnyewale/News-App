import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3 mb-3">
        <h2>Top - Headlines</h2>
        <div className="row my-3">
          <div className="col-md-4">
            <NewsItem
              title="card-1"
              description=" This is text to be displayed in card body."
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="card-2"
              description=" This is text to be displayed in card body."
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="card-3"
              description=" This is text to be displayed in card body."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="card-4"
              description=" This is text to be displayed in card body."
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="card-5"
              description=" This is text to be displayed in card body."
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="card-6"
              description=" This is text to be displayed in card body."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
