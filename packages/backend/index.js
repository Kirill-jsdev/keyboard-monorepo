const express = require('express')

const port = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
	res.send('am a backend server')
})

app.listen(5000, (err) => {
	if (err) console.log(`Error: ${err.message}`)
	else console.log(`The app is running on port ${port}`)
})
