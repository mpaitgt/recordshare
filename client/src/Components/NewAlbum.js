import React from 'react';
import Card from '../Components/Elements/Card';
import Input from '../Components/Elements/Input';
import Button from '../Components/Elements/Button';
import Text from '../Components/Elements/Text';
import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`;

class NewAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      image: '',
      story: '',
      genres: []
    }
  }

  render() {
    const { title, artist, image, story, genres } = this.state;

    return (
      <Card>
        <div>
          <input type="file" />
        </div>
        <div>
          <Text variant="label">Artist</Text>
          <Input />
        </div>
        <div>
          <Text variant="label">Album</Text>
          <Input />
        </div>
        <div>
          <Text variant="label">Your story</Text>
          <Input />
        </div>
        <div>
          <Text variant="label">Select genres:</Text>
          <Grid>
            <div>
              <input type="checkbox" name="classic-rock" value="Classic Rock" />
              <Text variant="label" for="classic-rock"> Classic Rock</Text>
            </div>
            <div>
              <input type="checkbox" name="electronic" value="Electronic" />
              <Text variant="label" for="electronic"> Electronic</Text>
            </div>
            <div>
              <input type="checkbox" name="pop" value="Pop" />
              <Text variant="label" for="pop"> Pop</Text>
            </div>
            <div>
              <input type="checkbox" name="jazz" value="Jazz" />
              <Text variant="label" for="jazz"> Jazz</Text>
            </div>
            <div>
              <input type="checkbox" name="alternative" value="Alternative" />
              <Text variant="label" for="alternative"> Alternative</Text>
            </div>
            <div>
              <input type="checkbox" name="folk" value="Folk" />
              <Text variant="label" for="folk"> Folk</Text>
            </div>
            <div>
              <input type="checkbox" name="indie" value="Indie" />
              <Text variant="label" for="indie"> Indie</Text>
            </div>
            <div>
              <input type="checkbox" name="punk" value="Punk" />
              <Text variant="label" for="punk"> Punk</Text>
            </div>
            <div>
              <input type="checkbox" name="classical" value="Classical" />
              <Text variant="label" for="classical"> Classical</Text>
            </div>
          </Grid>


        </div>




        <Button>Submit</Button>
      </Card>
    )
  }
};

export default NewAlbum;