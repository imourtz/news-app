import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    {this.props.filtered.map((article, index) => {
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
                {this.props.notFound ? (
                    <div className="text-center">
                        <img className="not-found-logo" src="https://stubborn.fun/images/image-s-third-2.png" alt="not-fount logo" />
                        <h3>Oop! No results based on your Search!</h3>
                    </div>
                ): null}
            </div>
        )
    }
}

export default Search;