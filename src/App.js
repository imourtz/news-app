import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import Home from './components/Home';
import Business from './components/Business';
import Tech from './components/Tech';
import Search from './components/Search';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeNews: [],
      businessNews: [],
      techNews: [],
      allNews: [],
      filteredPosts: [],
      inputValue: '',
      notFound: false
    }
    this.filterPosts = this.filterPosts.bind(this);
  }
  async componentDidMount() {
    const { data: wallStreet } = await axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=146ee6a8d0d34898820445eeb9cf2fcf') 
    const { data: business } = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=146ee6a8d0d34898820445eeb9cf2fcf')
    const { data: tech } = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=146ee6a8d0d34898820445eeb9cf2fcf')
    this.setState({
      homeNews: wallStreet.articles,
      businessNews: business.articles,
      techNews: tech.articles
    })
    const arrayAll = [...wallStreet.articles, ...business.articles, ...tech.articles];
    this.setState({
      allNews: arrayAll,
      filteredPosts: arrayAll
    })
    console.log(this.state.filteredPosts)
    console.log(this.state.allNews)
    console.log(this.state.homeNews)
  }

  filterPosts(e) {
    this.setState({
      inputValue: e.target.value,
      filteredPosts: this.state.allNews,
      notFound: false
    })
    let inputs = e.target.value;
    let filtered = this.state.allNews.filter(function (item) {
      return item.title.toLowerCase().includes(inputs);
    });
    this.setState({filteredPosts: filtered});
    if (this.state.filteredPosts.length === 0) {
      this.setState({
        notFound: true
      })
    }
  }

  handlesubmit(e) {
    e.preventDefault();
    if (this.state.filteredPosts.length === 0) {
      this.setState({
        notFound: true
      })
    } else {
      this.setState({
        notFound: false
      })
    }
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
            <div className="container">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item logo active">
                  <Link to="/" className="nav-link">TOP NEWS</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Business" className="nav-link">Business</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Tech" className="nav-link">Tech</Link>
                </li>
              </ul>
              <form className="form-inline mt-2 mt-md-0" onSubmit={this.handlesubmit}>
                <Link to="/Search" className="nav-link">
                  <input className="form-control mr-sm-2" type="text" onChange={this.filterPosts} placeholder="Search"/>
                  <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
                </Link>
              </form>
            </div>
          </nav>
        </div>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home homeNews={this.state.homeNews} filtered={this.state.filteredPosts}/>
          </Route>
          <Route path="/Business">
            <Business businessNews={this.state.businessNews}/>
          </Route>
          <Route path="/Tech">
            <Tech techNews={this.state.techNews} />
          </Route>
          <Route path="/Search">
            <Search filtered={this.state.filteredPosts} notFound={this.state.notFound}/>
          </Route>
        </Switch>
      </Router>
    )
  }
}


export default App;
