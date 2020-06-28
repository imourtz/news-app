import React from "react";
import { Container, NewsImage, NewsCard } from "../styles/Theme";

class Tech extends React.Component {
  render() {
    return (
      <Container className='row'>
        {this.props.techNews.map((article, index) => {
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
                <a href={article.url} target='_blank' rel='noopener noreferrer'>
                  Read More..
                </a>
              </NewsCard>
            </div>
          );
        })}
      </Container>
    );
  }
}

export default Tech;
