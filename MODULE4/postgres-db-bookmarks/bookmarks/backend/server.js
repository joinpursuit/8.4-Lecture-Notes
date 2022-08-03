const app = require("./app.js");

require("dotenv").config();
// Allows access to .env file and its vars;
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App live on port: ${PORT}!$!@!@$@!!`)
});
// Listens for requests on whatever the PORT is that we specify - turns our server on.