import React, {Component} from 'react';
import Container from '../Components/Container/Container';
import ContentCard from '../Components/ContentCard/ContentCard';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import omdb from '../Utils/omdb';

class Search extends Component {
  state = {
    search: '',
    data: [],
    results: null
  }

  handleOnDragStart = (e) => e.preventDefault();

  handleSubmit = e => {
    e.preventDefault();
    omdb.getMovieByTerm(this.state.search)
      .then(res => {
        console.log(res.data);
        if (res.data.length === 0) {
          this.setState({ results: false })
        } else {
          this.setState({ data: res.data, results: true });
        }
        
      })
      .catch(err => console.log(err));
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const renderCards = this.state.data.map(movie => {
      return (
        <ContentCard onDragStart={this.handleOnDragStart} content={movie} key={movie.id}/>
      )
    })

    return (
      <div className="page">
        <Container>
          <form className="search-form page" onSubmit={this.handleSubmit}>
            <Input 
              name="search" 
              value={this.state.search} 
              onChange={this.handleChange} 
              placeholder="Search content" 
            />
            <Button type="submit">Search</Button>
          </form>
        </Container>
        {this.state.data.length === 0
        ?
        null
        :
        <h2>{this.state.data.length} Results</h2>
        }
        <Container>
          {renderCards}
        </Container>
      </div>
    )
  }
}

export default Search;