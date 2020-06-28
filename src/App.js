import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Business from "./components/Business";
import Tech from "./components/Tech";
import Search from "./components/Search";
import { Navigation } from "./components/Navigation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeNews: [],
      businessNews: [],
      techNews: [],
      allNews: [],
      filteredPosts: [],
      inputValue: "",
      notFound: false,
    };
    this.filterPosts = this.filterPosts.bind(this);
  }
  async componentDidMount() {
    const { data: wallStreet } = await axios.get(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=146ee6a8d0d34898820445eeb9cf2fcf"
    );
    const { data: business } = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=146ee6a8d0d34898820445eeb9cf2fcf"
    );
    const { data: tech } = await axios.get(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=146ee6a8d0d34898820445eeb9cf2fcf"
    );
    this.setState({
      homeNews: wallStreet.articles,
      businessNews: business.articles,
      techNews: tech.articles,
    });
    const arrayAll = [
      ...wallStreet.articles,
      ...business.articles,
      ...tech.articles,
    ];
    this.setState({
      allNews: arrayAll,
      filteredPosts: arrayAll,
    });
  }

  filterPosts(e) {
    this.setState({
      inputValue: e.target.value,
      filteredPosts: this.state.allNews,
      notFound: false,
    });
    let inputs = e.target.value;
    let filtered = this.state.allNews.filter(function (item) {
      return item.title.toLowerCase().includes(inputs);
    });
    this.setState({ filteredPosts: filtered });
    if (this.state.filteredPosts.length === 0) {
      this.setState({
        notFound: true,
      });
    }
  }

  handlesubmit(e) {
    e.preventDefault();
    if (this.state.filteredPosts.length === 0) {
      this.setState({
        notFound: true,
      });
    } else {
      this.setState({
        notFound: false,
      });
    }
  }

  render() {
    return (
      <Router>
        <Navigation
          handlesubmit={this.handlesubmit}
          filterPosts={this.filterPosts}
        />
        <Switch>
          <Route exact path='/'>
            <Home
              homeNews={this.state.homeNews}
              filtered={this.state.filteredPosts}
            />
          </Route>
          <Route path='/business'>
            <Business businessNews={this.state.businessNews} />
          </Route>
          <Route path='/tech'>
            <Tech techNews={this.state.techNews} />
          </Route>
          <Route path='/search'>
            <Search
              filtered={this.state.filteredPosts}
              notFound={this.state.notFound}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
