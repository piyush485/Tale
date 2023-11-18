import { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false
        }
        // this.state.articles.forEach((data) => console.log(data))
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=114157f2e50c4aa995444358e070e04f";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles});
        console.log(data);
    }

    render() {
        return (
            <div className='container my-3'>
                <h1>Tale - Top HeadLines</h1>
                <div className="row">
                {this.state.articles.map((element) => {
                    return <div className="col-md-3 my-2" key={element.url}>
                        <NewsItem 
                            title={element.title ? element.title.slice(0, 40) : "Visit the website to read news"} 
                            description={element.description ? element.description.slice(0, 80) : "Visit the website to read news"} 
                            imageUrl={element.urlToImage ? element.urlToImage : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.trroofingsheets.co.uk%2Fwp-content%2Fuploads%2F2016%2F05%2Fdefault-no-image-1.png&f=1&nofb=1&ipt=761426fb37045881dca9acb838286c608f9cb9f1720d5443999ced1c49f57f13&ipo=images"} 
                            url={element.url}  />
                    </div>
                })}
                </div>
            </div>
        )
    }
}