const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
const db = require("./db/connect");
db();

//import routes
const authModel = require("./models/authModel");
const registerRoutes = require("./routes/registerRoutes");
const createdData = require("./routes/createDataRoutes");
const weightGainMonday = require("./routes/weightGainMonday");
const weightGainTuesday = require("./routes/weightGainTuesday");
const weightGainWednesday = require("./routes/weightGainWednesday");
const weightGainThursday = require("./routes/weightGainThursday");
const weightGainFriday = require("./routes/weightGainFriday");
const weightGainSaturday = require("./routes/weightGainSaturday");
const weightGainSunday = require("./routes/weightGainSunday");
const weightLoss = require("./routes/weightLossRoutes");
const bodyBuildingVeg = require("./routes/bodyBuildingVegRoutes");
const bodyBuildingNonVeg = require("./routes/bodyBuildingNonVegRoutes");
const muscleBuilding = require("./routes/muscleBuildingRoutes");
const dietForAcidity = require("./routes/dietForAcidityRoutes");
const dietForDiabetes = require("./routes/dietForDiabetesRoutes");
const dietForUricAcid = require("./routes/dietForUricAcidRoutes");

app.get("/", (req,res) => {
    res.send("Welcome to My App!!!");
});

app.use("/diet",registerRoutes);
app.use("/", authModel.authenticateUser);
app.use("/diet/data", createdData);
app.use("/diet/weightGainMonday",weightGainMonday);
app.use("/diet/weightGainTuesday",weightGainTuesday);
app.use("/diet/weightGainWednesday",weightGainWednesday);
app.use("/diet/weightGainThursday",weightGainThursday);
app.use("/diet/weightGainFriday",weightGainFriday);
app.use("/diet/weightGainSaturday",weightGainSaturday);
app.use("/diet/weightGainSunday",weightGainSunday);
app.use("/diet/weightLoss",weightLoss);
app.use("/diet/bodyBuildingVeg",bodyBuildingVeg);
app.use("/diet/bodyBuildingNonVeg",bodyBuildingNonVeg);
app.use("/diet/muscleBuilding", muscleBuilding);
app.use("/diet/acidity", dietForAcidity);
app.use("/diet/diabetes", dietForDiabetes);
app.use("/diet/uricacid", dietForUricAcid);

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`App is running on the PORT ${process.env.PORT}`);
});