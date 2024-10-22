
## Installation

The project consists of two parts: client and server. You'll need to install and run both separately.

### Client Installation

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the client directory and add your environment variables:
```env
REACT_APP_API_URL=http://localhost:5000
```

4. Start the client:
```bash
npm start
```

The client should now be running on `http://localhost:3000`

#### Client Dependencies
- dotenv: ^16.4.5
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.27.0

### Server Installation

1. Open a new terminal and navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory and add your environment variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

4. Start the server:
```bash
npm start
```

The server should now be running on `http://localhost:5000`

## Running the Application

You'll need both client and server running simultaneously:

1. Terminal 1 (Client):
```bash
cd client
npm start
```

2. Terminal 2 (Server):
```bash
cd server
npm start
```

## Troubleshooting

Common issues and solutions:

1. If modules are not found:
```bash
npm install --legacy-peer-deps
```

2. If port 3000 is already in use:
- Change the port in client's .env:
```env
PORT=3001
```

3. If MongoDB connection fails:
- Ensure MongoDB service is running
- Check if your connection string in server's .env is correct

```env
MONGO_URL=locakhosthttp://localhost:3124
```
