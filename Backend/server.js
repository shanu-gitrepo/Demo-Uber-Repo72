const dotenv = require("dotenv").config()

const http = require("http")
const app = require("./app")
const Port = process.env.PORT || 3000
const server = http.createServer(app); 
server.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
}); 