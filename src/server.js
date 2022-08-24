
const express = require('express')

app = express()

app.get("",(req, resp) => {
	resp.send("hello")
})

app.listen(80)
