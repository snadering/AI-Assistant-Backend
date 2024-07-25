# OpenAI Backend API

This repository contains the backend server for interacting with the OpenAI API. It provides a simple endpoint to receive responses from OpenAI's GPT-3.5-turbo model.

## Table of Contents

- [OpenAI Backend API](#openai-backend-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Setup](#setup)

## Features

- Express server setup
- Integration with OpenAI API
- CORS and JSON support
- Simple POST endpoint to get responses from OpenAI

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/snadering/AI-Assistant-Backend.git
    ```
2. **Add .env file and paste your OpenAI Api Key**
   ```bash
   echo >> "OPENAI_API_KEY=<your-api-key>"
   ```
3. **Run Server**
    ```bash
   npm run server
   ```