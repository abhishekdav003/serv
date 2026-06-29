const express = require("express")
const console = require("node:console")
const app = express()
const productRouter = require("./routes/products")
const port = 4000
app.use(express.json())

app.use("/products",productRouter)

app.get("/", (req, res) => {
  res.send("server is running")
})

app.listen(port, () => {
  console.log("Server for ecommerce platform is running on port:",port)
})