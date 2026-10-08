import express from 'express'
import dotenv from 'dotenv'
import { moviesRouter } from "./router/movies.js"
import { logger } from "./middlewares/logger.js"
import { notFound } from "./middlewares/notFound.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(logger)
app.use("/movies", moviesRouter)
app.use(notFound)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log("server started..."))
