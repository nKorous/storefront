# Simple Storefront app

## Notes
1. the main aim for this project is to show a simple path for data from an MSSQL database through a server/API and display it on a web page. There is really nothing fancy going on, it's purly as an example.

## Prereq Instructions
1. create a `conn.json` file in the `back` directory with the following JSON property, replacing the placholders with your MSSQL database connection information
``` JSON
{
    "mssqlConnectionString": "mssql://USERNAME:PASSWORD@SERVER/DATABASE"
}
```
1. Use the included `createDBscript.sql` file to create a new database with the `products` table and a few example lines


## Dev Environment

1. the `back` folder contains the server side, Node.js code, the `front` folder contains the user interface and front end code.
1. to start the server, navigate to the `back` directory and run `npm run startDev` to start a dev server for the serverside code
1. to serve the front end use any static HTML method you prefer. If using VSCode the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension by Ritwick Dey is great and really easy to use.