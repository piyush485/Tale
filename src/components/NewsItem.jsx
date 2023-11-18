import { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, url} = this.props;
    return (
      <div className="card my-2 mx-2" style={{ width: "15rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={url} rel="noopener noreferrer" className="btn btn-sm btn-primary" target="_blank">Read More</a>
                </div>
        </div>
    )
  }
}

export default NewsItem