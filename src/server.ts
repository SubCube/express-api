import { app } from './app'
import nodemon from 'nodemon'

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}/docs`))

process.on('SIGHUP', () => {
  nodemon.emit('quit')
  process.exit(0)
})
