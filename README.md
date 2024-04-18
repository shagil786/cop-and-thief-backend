# Fugitive Capture Backend

This Node.js backend serves as the server-side component for the Fugitive Capture game. It handles the logic for determining whether any of the three cops have successfully captured the fugitive based on their city and vehicle selections.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd fugitive-capture-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

## Usage

The backend exposes a single API endpoint for checking the capture status:

```
POST /capture
```

This endpoint expects a JSON object with the following structure in the request body:

```json
{
  "cop1": {
    "city": "Yapkashnagar",
    "vehicle": {
      "type": "EV Bike",
      "range": 60
    }
  },
  "cop2": {
    "city": "Lihaspur",
    "vehicle": {
      "type": "EV Car",
      "range": 100
    }
  },
  "cop3": {
    "city": "Narmis City",
    "vehicle": {
      "type": "EV SUV",
      "range": 120
    }
  }
}
```

The server will respond with a JSON object containing the capture status and the fugitive city:

```json
{
  "captureStatus": true,
  "fugitiveCity": {
    "name": "Narmis City",
    "distance": 40
  }
}
```

## Development

- This project uses Node.js for the backend logic.
- Express.js is used as the web server framework.
- The fugitive's city is randomly selected at runtime.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).
