const app = require('./modules/app/app')
const cors = require('cors')
const {PORT, CLIENT_ORIGIN} = require('./config')



app.listen(PORT, () => {
  console.log(`[petful-server] Listening on ${ PORT }.`)
})

app.use(cors({
  origin: CLIENT_ORIGIN
}))
