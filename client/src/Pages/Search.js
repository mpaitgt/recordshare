import React, {Component} from 'react';
import Container from '../Components/Container';
import Card from '../Components/Card';
import ContentCard from '../Components/ContentCard/ContentCard';
import SearchBar from '../Components/SearchBar';
import SearchBtn from '../Components/SearchBtn';
import Button from '../Components/Button';
import Transition from '../Components/Transition';
import Text from '../Components/Text';
import styled from '@emotion/styled';
import omdb from '../Utils/omdb';

const FORM = styled.form`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  width: auto;
  margin: 0 auto;
`;

class Search extends Component {
  state = {
    search: '',
    data: [],
    results: null,
    message: ''
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

  displayResponse = () => {
    if (this.state.data.length === 0) {
      return <Text variant="h3">There are no results</Text>
    } else {
      return null;
    }
  }

  render() {
    const renderCards = this.state.data.map(movie => {
      return (
        <ContentCard onDragStart={this.handleOnDragStart} content={movie} key={movie.id}/>
      )
    })

    return (
      <Transition>
        
        <div className="page">
          <Card>
          <div>
            <Button>Watch</Button>
            <Button>Listen</Button>
          </div>
          <Container>
            <FORM className="search-form page" onSubmit={this.handleSubmit}>
              <SearchBar 
                name="search" 
                value={this.state.search} 
                onChange={this.handleChange} 
                placeholder="Search content" 
              />
              <SearchBtn type="submit">Search</SearchBtn>
            </FORM>
          </Container>
          </Card>
          {this.state.data.length === 0
          ?
          null
          :
          <Text variant="h4">{this.state.data.length} Results</Text>
          }
          <Container>
            {renderCards}
          </Container>
        </div>

      </Transition>
    )
  }
}

export default Search;