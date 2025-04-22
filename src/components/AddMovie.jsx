// src/components/AddMovie.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMovie.css';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hypothetically add movie (you can add logic to store the movie data)
    console.log({
      title,
      director,
      genre,
      releaseYear,
      synopsis,
      posterUrl,
    });
    navigate('/');
  };

  return (
    <div className="add-movie">
      <h1>Add New Movie</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </label>
        <label>
          Director:
          <input 
            type="text" 
            value={director} 
            onChange={(e) => setDirector(e.target.value)} 
          />
        </label>
        <label>
          Genre:
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Science Fiction">Science Fiction</option>
          </select>
        </label>
        <label>
          Release Year:
          <input 
            type="number" 
            value={releaseYear} 
            onChange={(e) => setReleaseYear(e.target.value)} 
          />
        </label>
        <label>
          Synopsis:
          <textarea 
            value={synopsis} 
            onChange={(e) => setSynopsis(e.target.value)} 
          />
        </label>
        <label>
          Poster Image URL:
          <input 
            type="url" 
            value={posterUrl} 
            onChange={(e) => setPosterUrl(e.target.value)} 
          />
        </label>
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
