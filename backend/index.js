if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const dishRouter = require("./routes/dish.routes");
const connectDB = require("./config/db");

const app = express();
const port = process.env.PORT || 8080;


app.use(cors("*"));
app.use(express.json());


// Api for getting list of all dishes
app.use("/dishes", dishRouter);

// Api for updating the publish status of a dish
app.use("/update", dishRouter);





app.use("/", (req, res) => {
    res.send("Server is running successfully")
})

app.listen(port, () => {
    connectDB();
    console.log(`Server is started on port ${port}`.yellow);
})