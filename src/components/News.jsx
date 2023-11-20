import { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1) + " - Tale";
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.props.category == 'general' ? 'Tale' : this.capitalizeFirstLetter(this.props.category)}`;
    }

    async updatePage() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=114157f2e50c4aa995444358e070e04f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({ articles: parsedData.articles, loading: false });
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=114157f2e50c4aa995444358e070e04f&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
        console.log(data);
    }


    handlePreviousClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updatePage();
    }
    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updatePage();
    }

    fetchMoreData = async () => {
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=114157f2e50c4aa995444358e070e04f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles), loading: false });
    }

    render() {
        return (
            <>
                <h1 className='text-center my-3'>Tale - Top HeadLines</h1>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<h4><Spinner /></h4>}
                >
                    <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-3 my-2" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 40) : "Visit the website to read news"}
                                    description={element.description ? element.description.slice(0, 80) : "Visit the website to read news"}
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
            </>
        )
    }
}