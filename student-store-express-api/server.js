// added code
const express = require("express");
// const morgan = require("morgan");
// const lowdb = require("lowdb");
const app = express();


 // app.get links to / ping pong
app.get("/store", async (request, response, next) => {
    response.status(200).json({"ping": "pong"})
} )


const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`🚀 Server listening on port ` + port)
})
