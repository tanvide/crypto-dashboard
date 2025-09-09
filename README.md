# Crypto Financial Dashboard

Track your crypto portfolio with real-time prices from CoinGecko and Bitstamp, plus interactive price charts.

## Features

- Login/register for personalized portfolios
- Add/remove/edit assets and balances
- Real-time CoinGecko and Bitstamp prices
- 30-day historical price charts for each asset
- Total portfolio value calculation

## Getting Started

### 1. Backend Setup

- Go to the `backend` directory.
- Run:
  ```
  npm install
  ```
- Start the backend locally:
  ```
  node server.js
  ```

### 2. Frontend Setup

- Go to the `frontend` directory.
- Run:
  ```
  npm install
  ```
- Start the frontend locally:
  ```
  npm start
  ```

### 3. Deploy Publicly

**Backend:**  
- Push the `backend` folder to GitHub.
- On [render.com](https://render.com/) or [railway.app](https://railway.app/), create a new Node.js service from your repo.
- Set start command: `node server.js`
- After deployment, note your backend URL.

**Frontend:**  
- Push the `frontend` folder to GitHub.
- On [vercel.com](https://vercel.com/), import your frontend repo.
- Set environment variable `REACT_APP_BACKEND_URL` to your backend URL.
- After deployment, your dashboard is public!

### 4. Usage

- Open your Vercel frontend URL.
- Register or login.
- Add assets, adjust balances, and view charts.

---

**Note:**  
- This is a demo; the backend uses in-memory storage.
- For production: add a database and improve security.
