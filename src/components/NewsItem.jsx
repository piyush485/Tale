import { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, url, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card my-2 mx-2">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1"}}>{source}</span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={url} rel="noopener noreferrer" className="btn btn-sm btn-info" target="_blank">Read More &#8599;</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

NewsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.string,
  source: PropTypes.string,
  date: PropTypes.date
}