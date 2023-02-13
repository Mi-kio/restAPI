const express =  require("express");
const router = express.Router();

const app = express();
const middleware = require("./routes");
app.use("/cat", middleware);
const port = 3000;

app.get("/", (req,res)=>{
   res.send("HI");
});

module.exports = app;

app.listen(3000, ()=>{
console.log(`listening at ${port}`)
})