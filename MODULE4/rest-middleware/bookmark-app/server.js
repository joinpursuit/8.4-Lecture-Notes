const app = require("./app.js");

require("dotenv").config();
// allows us access to our .env file

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App live on port ${PORT}`)
});


