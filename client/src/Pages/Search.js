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
    results: []
  }

  responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  }

  handleOnDragStart = (e) => e.preventDefault();

  handleSubmit = e => {
    e.preventDefault();
    omdb.getMovies(this.state.search)
      .then(res => {
        console.log(res.data);
        this.setState({ results: res.data });
      })
      .catch(err => console.log(err));
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const renderCards = this.state.results.map(movie => {
      return (
        <ContentCard onDragStart={this.handleOnDragStart} content={movie} key={movie.id}/>
      )
    })

    return (
      <div>
        <Container>
          <form className="search-form" onSubmit={this.handleSubmit}>
            <Input 
              name="search" 
              value={this.state.search} 
              onChange={this.handleChange} 
              placeholder="Search content" 
            />
            <Button type="submit">Search</Button>
          </form>
        </Container>
        {/* <Container>
          {renderCards}
        </Container> */}
        <AliceCarousel 
          mouseTrackingEnabled 
          response={this.responsive}
          items={renderCards}
        />
      </div>
    )
  }
}

export default Search;