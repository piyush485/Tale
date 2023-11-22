import PropTypes from 'prop-types'

const NewsItem = (props) => {

  const getDayDate = (d) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return d.getDate() + ' ' + months[d.getMonth()];
  }

  let { title, description, imageUrl, url, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card my-2 mx-2 ">
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
          <img src={imageUrl} className="card-img-top rounded float-left img-fluid" alt="..."/>
        <div className="card-body"> 
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className='card-text '><small>{getDayDate(new Date(date))} {author ? ' | ' + author : ''}</small></p>
          <div><a href={url} rel="noopener noreferrer" className="btn btn-sm btn-dark m-b-3" target="_blank">Read More &#8599;</a></div>
        </div>
        
      </div>
    </div>
  )
}

export default NewsItem

NewsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.string,
  source: PropTypes.string,
  date: PropTypes.string
}