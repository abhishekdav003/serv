const express = require("express")
const console = require("node:console")
const app = express()
const port = 4000
const userRoute = require("./routes/userRoutes")
const productRoute = require("./routes/productRoutes")
const cartRoute = require("./routes/cartRoutes")

app.use("/users", userRoute)
app.use("/products", productRoute)
app.use("/cart",cartRoute)

app.get("/", (req, res) => {
  res.send("Server is running")
})

app.use((req, res) => {
  res.status(404).json("Invalid URL")
})

app.listen(port, () => {
  console.log("Server is running  on port:",port)
})