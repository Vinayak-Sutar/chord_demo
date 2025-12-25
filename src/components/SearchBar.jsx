import React, { useRef, useEffect, Fragment, useState } from "react";
import YTSearch from "youtube-api-search";
import VideoCard from "./VideoCard";
import ChordGrid from "./ChordGrid";
import SongsList from "./SongsList";
import cachedSongsData from "../data/cachedSongs.json";
import "./SearchBar.css";

function SearchBar() {
  const API_KEY = "AIzaSyAnKoIFOMcI8r-Gk61UdlwBNHVf5On_P5U";

  // Load first song as default
  const defaultSong = cachedSongsData[4]; // Index 4 is Kehna

  const [videos, setVideos] = useState();
  const [term, setTerm] = useState("");
  const [showCards, setShowCards] = useState(false);
  const [chordData, setChordData] = useState(defaultSong);
  const [showSongsList, setShowSongsList] = useState(false);

  const wrapperRef = useRef(null);

  const videoSearch = (searchTerm) => {
    YTSearch({ key: API_KEY, term: searchTerm, maxResults: 10 }, (videos) => {
      console.log(videos);
      setVideos(videos);
    });
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSearchClick = () => {
    if (term.trim()) {
      setShowCards(true);
      videoSearch(term);
    }
  };

  const handleClickLink = (videoId) => {
    setShowCards(false);

    // Check if song is in our cached database
    const cachedSong = cachedSongsData.find(
      (song) => song.youtube_id === videoId
    );

    if (cachedSong) {
      setChordData(cachedSong);
      setShowSongsList(false);
    } else {
      // Show songs list page
      setShowSongsList(true);
    }
  };

  const handleSelectSong = (song) => {
    setChordData(song);
    setShowSongsList(false);
  };

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowCards(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Fragment>
      <div className="search-wrapper">
        <h1 className="title">🎸 Chords Extractor</h1>
        <p className="subtitle">Search for any song and learn chords</p>

        <div className="search-container">
          <input
            onChange={handleChange}
            value={term}
            type="text"
            className="search-input"
            placeholder="Search for a song..."
            autoFocus
            onKeyPress={(e) => e.key === "Enter" && handleSearchClick()}
          />
          <button className="search-button" onClick={handleSearchClick}>
            <i className="fa fa-search"></i> Search
          </button>
        </div>

        <div className="video-cards" ref={wrapperRef}>
          {videos &&
            showCards &&
            videos.map((v) => (
              <button
                key={v.id.videoId}
                className="video-card-button"
                onClick={() => handleClickLink(v.id.videoId)}
              >
                <VideoCard
                  title={v.snippet.title}
                  channel={v.snippet.channelTitle}
                  img={v.snippet.thumbnails.high.url}
                  isCached={cachedSongsData.some(
                    (song) => song.youtube_id === v.id.videoId
                  )}
                />
              </button>
            ))}
        </div>
      </div>

      {showSongsList && (
        <SongsList
          songs={cachedSongsData}
          onSelectSong={handleSelectSong}
          onClose={() => setShowSongsList(false)}
        />
      )}

      {chordData && (
        <ChordGrid
          chords={chordData.chords}
          beatLength={chordData.beat_length}
          url={chordData.youtube_url}
          bpm={chordData.bpm}
          musicKey={chordData.key}
          title={chordData.title}
          cached={true}
        />
      )}
    </Fragment>
  );
}

export default SearchBar;
