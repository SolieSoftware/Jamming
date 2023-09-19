import logo from './logo.svg';
import './App.css';

import React, { useState, useCallback } from "react";

import Playlist from "./Playlist";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Spotify from "./Spotify";


const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback((track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  }, [playlistTracks]
  );
  
  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => 
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
  setPlaylistName(name)
}, []);

const savePlaylist = useCallback(() => {
  const trackUris = playlistTracks.map((track) => track.uri);
  Spotify.savePlaylist(playlistName, trackUris).then(() => {
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  });
}, [playlistName, playlistTracks]);

  return (
    <div className="Page">
      <h1>Ja<span>mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>

  );

};

export default App;
