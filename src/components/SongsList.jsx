import React from "react";
import "./SongsList.css";

function SongsList({ songs, onSelectSong, onClose }) {
  return (
    <div className="songs-list-overlay">
      <div className="songs-list-container">
        <div className="songs-list-header">
          <h2>🎸 Available Songs</h2>
          <p className="demo-notice">
            This is a frontend-only demo. Only the following songs are
            available:
          </p>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="songs-grid">
          {songs.map((song, idx) => (
            <div
              key={idx}
              className="song-item"
              onClick={() => onSelectSong(song)}
            >
              <div className="song-thumbnail">
                <img
                  src={`https://img.youtube.com/vi/${song.youtube_id}/hqdefault.jpg`}
                  alt={song.title}
                />
                <div className="play-overlay">
                  <i className="fa fa-play-circle"></i>
                </div>
              </div>
              <div className="song-info">
                <h3 className="song-title">{song.title}</h3>
                <div className="song-meta">
                  <span className="song-key">Key: {song.key}</span>
                  <span className="song-bpm">BPM: {Math.round(song.bpm)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SongsList;
