// index.js
import express from 'express';
import cors from 'cors';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json());
app.use(cors())

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Endpoint to get a response from OpenAI
app.post('/api/get-response', async (req, res) => {
  const { userInput } = req.body;

  if (!userInput) {
    return res.status(400).json({ error: 'User input is required' });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant' },
        { role: 'user', content: userInput }
      ]
    });
    
    res.json({ response: response.choices[0].message.content });
  } catch (error) {
    console.error('Error fetching response from OpenAI:', error);
    res.status(500).json({ error: 'Failed to get response from OpenAI' });
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
