// YOUR CODE HERE
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const { NotFoundError } = require("./utils/errors")
const storeRouter = require("./routes/store")

const app = express()

// app. use to get store router
app.use(morgan("tiny"))
app.use(express.json())
app.use(cors())
app.use("/store", storeRouter)





/* Handle all 404 errors that weren't matched by a route */
app.use((req, res, next) => {
    return next(new NotFoundError())
  })

//Generic error handler, anythign that is not handeled at this point is handeled
app.use((error, request, response, next) => {
    return response.status(error.status || 500).json({
        error: {message: error.message || "Something went wrong in the application", status: error.status || 500}
    })
})


module.exports = app