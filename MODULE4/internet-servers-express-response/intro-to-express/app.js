const express = require("express");
const app = express();
// ROUTES
app.get("/", (request, response) => {
    response.send("Hello 8.4!!!!")
});

app.get("/whatever", (request, response) => {
    response.send("HELLO FROM  Michael!!!")
})

app.listen(3333, () => {
    console.log("Listening on port 3333 8.4")
});
