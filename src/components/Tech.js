import React from 'react';

class Tech extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.techNews.map((article, index) => {
                    return (
                        <div key={index} className="column">
                            <div className="card">
                                <div className="card-body">
                                    <img src={article.urlToImage} className="card-img-top" alt="newsImage" />
                                    <h3 className="card-title">{article.title}</h3>
                                    <h4>By {article.author}</h4>
                                    <p>{article.content}</p>
                                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read More..</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Tech;