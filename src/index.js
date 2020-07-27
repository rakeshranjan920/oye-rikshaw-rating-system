const express = require('express')
const mongoConnect = require('./db/mongodb')
const app = express()
app.use(express.json())

const ride = require('./routers/rideRouter')
const passenger = require('./routers/passengerRouter')
const driver = require('./routers/driverRouter')

app.use('/ride',ride)
app.use('/passenger',passenger)
app.use('/driver',driver)

mongoConnect();

app.listen(process.env.PORT || 3000, () => {
    console.log('Express up on port:' + (process.env.port || 3000))
})