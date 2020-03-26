import React, {Component} from 'react';
// import Container from '../Components/Container';
import Card from '../Components/Card';
import ContentCard from '../Components/ContentCard/ContentCard';
import MusicCard from '../Components/MusicCard';
import SearchBar from '../Components/SearchBar';
import SearchBtn from '../Components/SearchBtn';
import Button from '../Components/Button';
import Transition from '../Components/Transition';
import Text from '../Components/Text';
import {Container, Row, Col} from 'react-grid-system';
import styled from '@emotion/styled';
import omdb from '../Utils/omdb';
import spotify from '../Utils/spotify';

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
    message: '',
    search_type: 'Watch'
  }

  handleOnDragStart = (e) => e.preventDefault();

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search_type == 'Watch') {
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
    else if (this.state.search_type == 'Listen') {
      spotify.getTracks(this.state.search)
        .then(res => {
          console.log(res.data)
          if (res.data.length === 0) {
            this.setState({ results: false })
          } else {
            this.setState({ data: res.data, results: true });
          }
        })
        .catch(err => console.log(err))
    }
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

  toggleSearch = e => {
    console.log(e.target);
    this.setState({ search_type: e.target.textContent }) 
  }

  render() {
    const renderCards = this.state.data.map(movie => {
      return (
        <ContentCard onDragStart={this.handleOnDragStart} content={movie} key={movie.id}/>
      )
    })

    const renderMusic = this.state.data.map(song => {
      return (
        <MusicCard content={song} key={song.id} />
      )
    })

    return (
      <Transition>
        
        <div className="page">
          <Card>
          <Text variant="h4">{this.state.search_type}</Text>
          <div>
            <Button onClick={this.toggleSearch}>Watch</Button>
            <Button onClick={this.toggleSearch}>Listen</Button>
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
            <Row>
            {
              this.state.search_type == 'watch'
              ?
              renderCards
              :
              renderMusic
            }
            </Row>
          </Container>
        </div>

      </Transition>
    )
  }
}

export default Search;