const express = require('express');
const SpotifyWebAPI = require('spotify-web-api-node');
const router = express.Router();
require('dotenv').config();

const { REACT_APP_SPOTIFY_CLIENT_ID, REACT_APP_SPOTIFY_CLIENT_SECRET } = process.env;

const spotify = new SpotifyWebAPI({
  clientId: REACT_APP_SPOTIFY_CLIENT_ID,
  clientSecret: REACT_APP_SPOTIFY_CLIENT_SECRET
})

spotify.clientCredentialsGrant()
  .then(data => {
    spotify.setAccessToken(data.body.access_token);
  }, err => {
    console.log('Something went wrong when retrieving the access token', err.message);
  })

// get artist by search query
router.get('/music/artists/query/:artist', function(req, res) {
  spotify.searchArtists(req.params.artist)
    .then(data => res.send(data.body.artists.items))
    .catch(err => res.send(err));
})

// get artist details by id
router.get('/music/artists/id/:id', function(req, res) {
  let obj = {};
  spotify.getArtist(req.params.id)
    .then(data => obj['artist'] = data.body)
    .then(result => spotify.getArtistAlbums(result.id))
    .then(result2 => obj['albums'] = result2.body.items)

    // .then(() => spotify.getArtistAlbums(req.params.id)
    // .then(data2 => {
    //   obj['albums'] = data2.body.items
    //   // res.send(obj);
    // })
    // .then(() => spotify.getArtistTopTracks(req.params.id)
    // .then(data3 => {
    //   obj['tracks'] = data3
    //   res.send(obj)
    // }))
    // )
    // })
      
        // .then(data2 => {
        //   o
        // })
        // .catch(err => res.send(err))
      // spotify.getArtistTopTracks(req.params.id)
      //   .then(data3 => {
      //     console.log(data3)
      //   })
      //   .catch(err => res.send(err))
    // .then(data => res.send(data.body))
    // .catch(err => res.send(err));
    
  // })
  
})

module.exports = router;