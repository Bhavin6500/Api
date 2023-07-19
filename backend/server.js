
const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
const app = express();
const port = 5000;

app.use(cors());

// API route for fetching deals
app.get('/api/deals', async (req, res) => {
  try {
    const response = await axios.get('https://api.hubapi.com/crm/v3/objects/deals', {
      headers: {
        'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});












app.get('/api/contacts', async (req, res) => {
  try {
    const response = await axios.get('https://api.hubapi.com/crm/v3/objects/contacts', {
      headers: {
        'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});









// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
