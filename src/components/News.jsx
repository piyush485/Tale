import { useState, useEffect } from 'react';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // const [ctr, setCtr] = useState(0);
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1) + " - Tale";
    }
    
    useEffect(() => {
        document.title = `${props.category == 'general' ? 'Tale' : capitalizeFirstLetter(props.category)}`;
        const updateData = async () => {
            props.setProgress(10);
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
            setLoading(true);
            props.setProgress(30);
            let data = await fetch(url);
            let parsedData = await data.json();
            props.setProgress(70);
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
            setLoading(false);
            props.setProgress(100);
        }
        updateData();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        setLoading(true);
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setLoading(false);
        setTotalResults(parsedData.totalResults);
    }

    return (
        <div className='my-5 p'>
            <h1 className='text-center' style={{ marginTop: '80px' }}>Tale - Top {props.category === 'general' ? '' : capitalizeFirstLetter(props.category).slice(0,-7)} HeadLines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}>
                <div className="container" style={{ width: '80%'}}>
                    <div className="row">
                        {
                            articles.map((element) => {
                                // setCtr(ctr + 1);+ toString(ctr)
                                return <div key={element.url} className="col-md-3">
                                    <NewsItem
                                        title={element.title ? element.title : "Visit the website to read news"}
                                        description={element.description ? element.description.slice(0, 100) : "Visit the website to read news"}
                                        imageUrl={element.urlToImage ? element.urlToImage : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.trroofingsheets.co.uk%2Fwp-content%2Fuploads%2F2016%2F05%2Fdefault-no-image-1.png&f=1&nofb=1&ipt=761426fb37045881dca9acb838286c608f9cb9f1720d5443999ced1c49f57f13&ipo=images"}
                                        url={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name} />
                                </div>
                            })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func,
    apiKey: PropTypes.string
}
export default News