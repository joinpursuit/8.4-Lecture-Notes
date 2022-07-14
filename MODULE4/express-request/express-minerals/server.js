const app = require("./app.js");

require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`app is live on port ${PORT}.`)
});



