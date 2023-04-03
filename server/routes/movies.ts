import express from 'express'
const router = express.Router()

import * as db from '../db/db'

router.get('/', (req, res) => {
  db.getAllMovies()
    .then((moviesArray) => {
      res.json(moviesArray)
    })
    .catch((err) => res.sendStatus(500).send(err.message))
})

export default router
