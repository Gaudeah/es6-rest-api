# es6-rest-api
Simple and fresh ES6 REST API Written in JS, using new Async/Await protocol

## Configuration
Every configuration you need is located on ./config.js (Host, Port, Motd..)

Sample config.js
```json
module.exports = {
    "service": {
        "host": "http://localhost",
        "port": 3000,
        "motd": "Server listening at "
    },
}
```

## Usage

* #### [GET] /
Main route you need to get to the API
Sample output
```json
{
    "message": "Welcome to the main API route, try /api/list to get full routes list of the API !"
}
```
- #### [GET] /api/list
Main route, list request to get every availables others routes (Directory listing in ./api/routes folder)

Sample output
```json
{
    "message": "Try to explore these routes !",
    "routes": [
        "cars",
        "models",
        "brands"
    ]
}
```
