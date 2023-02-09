import React from 'react';
import { Component } from 'react';

class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date , source } = this.props;
        return (
            <>
                <div className='my-3' >
                    <div className="card" >
                        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%" , zIndex:1 }} >
                            {source}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                        <img src={imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}... </h5>
                            <p className="card-text"> {description}... </p>
                            <p class="card-text"><small class="text-muted">By {author} on {new Date(date).toGMTString()} </small></p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm  btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default NewsItem;