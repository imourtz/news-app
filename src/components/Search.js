import React from "react";
import { Container, NewsImage, NewsCard } from "../styles/Theme";

class Search extends React.Component {
  render() {
    return (
      <div>
        <Container className='row'>
          {this.props.filtered.map((article, index) => {
            return (
              <div key={index} className='col col-sm-12 col-md-6'>
                <NewsCard>
                  <NewsImage
                    src={article.urlToImage}
                    className='card-img-top'
                    alt='newsImage'
                  />
                  <h3 className='card-title'>{article.title}</h3>
                  <h4>By {article.author}</h4>
                  <p>{article.content}</p>
                  <a
                    href={article.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Read More..
                  </a>
                </NewsCard>
              </div>
            );
          })}
        </Container>
        {this.props.notFound ? (
          <div className='text-center'>
            <img
              className='not-found-logo'
              src='https://stubborn.fun/images/image-s-third-2.png'
              alt='not-fount logo'
            />
            <h3>Oop! No results based on your Search!</h3>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Search;
