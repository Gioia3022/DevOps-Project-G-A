# User API web application

It is a straightforward REST API-exposed NodeJS web application that produces and saves user parameters in a [Redis database](https://redis.io/).

## Functionality

1. Start a web server
2. Create a user

## Installation

This application uses the Redis database and was created with NodeJS.

1. Install [NodeJS](https://nodejs.org/en/download/)

2. Install [Redis](https://redis.io/download)

3. Install application

Run the following command in the application's root directory (where the `package.json` file is located):

```
npm install 
```

## Usage

1. Start a web server

From the root directory of the project run:

```
npm start
```

A web server will launch and be accessible in your browser at http://localhost:5000.

2. Create a user

Send a POST (REST protocol) request using terminal:

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"sergkudinov","firstname":"sergei","lastname":"kudinov"}' \
  http://localhost:5000/user
```

It will output:

```
{"status":"success","msg":"OK"}
```

Another way to test your REST API is to use [Postman](https://www.postman.com/).

## Testing

From the root directory of the project, run:

```
npm test
```

## Author

GALIAZZO Gioia & ABDELKEFI Abdelaziz
