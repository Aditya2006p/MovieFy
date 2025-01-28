const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;
const OMDB_API_KEY = '57a2f15'; // Replace with your OMDb API key

app.use(cors());

app.get('/api/movies', async (req, res) => {
  const url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=Inception&type=movie`;

  try {
    const response = await axios.get(url);
    console.log('API Response:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching movies:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

app.get('/api/movies/:id', async (req, res) => {
  const { id } = req.params;
  const url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`;

  try {
    const response = await axios.get(url);
    console.log('API Response:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching movie:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch movie' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});