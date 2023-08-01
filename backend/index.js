const express = require("express");
const app = express();
require("dotenv").config();
const {dbConnect} = require("./config/database");
const routes = require("./routes/user");
const cors = require("cors");


const PORT = process.env.port || 4000;

app.use(express.json());
app.use(cors());

// database connect
dbConnect();

// mounting routes
app.use("/api/v1", routes);

// listening 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});