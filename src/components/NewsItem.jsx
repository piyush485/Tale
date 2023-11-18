import { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, url} = this.props;
    return (
      <div className="card my-2 mx-2" style={{ width: "18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
          <a href={url} rel="noopener noreferrer" className="btn btn-sm btn-info" target="_blank">Read More &#8599;</a>
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
  url: PropTypes.string
}