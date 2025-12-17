import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
  });

app.post("/submit", async (req, res) => {
    const lattitude = req.body["lat"];
    const longitude = req.body["long"];
    try{
    const result = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+lattitude+"&lon="+longitude+"&appid=e8a845cee6927e313c3e9a959e61880f");
    const celsius = (result.data.main.temp -273.15).toFixed(2);
    res.render("index.ejs", {content:JSON.stringify(result.data.main.temp),contentincelsius:celsius});
    console.log(result.data);
    }catch(error){
        res.status(404).send(error.message);
        console.log(error.message);
    }
});

app.listen(port, () => {
    console.log(`Your server is running in port ${port}.`);
});
