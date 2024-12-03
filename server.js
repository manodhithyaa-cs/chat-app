const express = require("express")
const http = require("http")
const app = express()
const port = process.env.PORT || 3000
const server = http.createServer(app)
const { Server } = require("socket.io")
const cors = require("cors")
const { join } = require("path")
const io = new Server(server)
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const { fetchUser, sendMessage, fetchMessage } = require("./utils")

var corsOption = {
    origin: `http://localhost:${port}`,
    optionsSuccessStatus: 200
}

const userData = {
    "email": null,
    "password": null,
}

app.get("/", cors(corsOption), (req, res, next) => {
    res.sendFile(join(__dirname, "template/index.html"))
})

app.post("/", (req, res) => {
    const { email, password } = req.body
    userData.email = email
    userData.password = password
    res.setHeader("Content-Type", "application/json")
    res.send(json({
        message: "User data received",
        email: userData.email,
        password: userData.password
    }))
    console.log(userData) 
})

io.on("connection", (socket) => {
    console.log("New User Connected")

    socket.on("disconnect", () => {
        console.log("User Disconnected")
    })
})

server.listen(port, (err) => err ? console.log(`Error: ${err}`) : console.log(`Server running on port: ${port}`));
