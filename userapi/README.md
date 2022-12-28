## Functionality

1. Start a web server
2. Create a user

## Usage

#### Run 
The following command mush be executed in the application's root directory (where the `package.json` file is located):

```sh
cd userapi
npm install 
```

#### Start a web server

From the root directory of the project run:

```sh
npm start
```

A web server will launch and be accessible in your browser at http://localhost:5000.

#### Create a user

Send a POST request using terminal:

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"sergkudinov","firstname":"sergei","lastname":"kudinov"}' \
  http://localhost:5000/user
```

It will output:

```sh
{"status":"success","msg":"OK"}
```

## Testing

From the root directory of the project, run:

```
npm test
```

## Author

GALIAZZO Gioia & ABDELKEFI Abdelaziz
