import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Spinner from './Spinner';



class News extends Component {
    static defaultProps = {
        country:"in",
        pageSize: 6,
        category:'general',

    }

    static propsTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }

    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=657ea0c9f8bd473196377275c49755cc&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let finalData = await data.json();
        console.log(finalData);
        this.setState({
            articles: finalData.articles,
            totalResults: finalData.totalResults,
            loading: false,
        });
    }

    handleNextClick = async () => {

        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=657ea0c9f8bd473196377275c49755cc&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let finalData = await data.json();
            //console.log(finalData);
            this.setState({});
            this.setState({
                page: this.state.page + 1,
                articles: finalData.articles,
                loading: false,
            })
        }
    }

    handlePrevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=657ea0c9f8bd473196377275c49755cc&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let finalData = await data.json();
        //console.log(finalData);

        this.setState({
            page: this.state.page - 1,
            articles: finalData.articles,
            loading: false,
        })

    }

 
    render() {
        return (
            <>
                <div className='container  my-3'>
                    <h2 className='text-center' >News monckey - Top Headlines </h2>
                    {this.state.loading && <Spinner />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}  >
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 51) : ""}
                                    description={element.description ? element.description.slice(0, 90) : ""}
                                    imageUrl={element.urlToImage ? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROR0GBkdj7hIHMncYNiJDqm85bNRboYjeF0zg5hOdABRuA-jBn2MXBC3uzDsCU-TkJjF0&usqp=CAU"}
                                    newsUrl={element.url} author = {element.author?element.author:"unkonwn"} date={element.publishedAt}
                                    source = {element.source.name}
                                />
                            </div>

                        })}
                    </div>
                    <div className="container  d-flex justify-content-between ">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} > &larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr; </button>
                    </div>
                </div>
            </>
        )
    }
}


export default News;