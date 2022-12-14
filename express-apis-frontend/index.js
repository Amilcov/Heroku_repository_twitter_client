const express = require("express");
const path = require("path");
const { render } = require("pug");

// Create the Express app.
const app = express();

// Set the pug view engine.
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

// Define a route.
app.get('/adi', (req, res) => {
   res.json({message: "Hello from client"});
}); 
app.get("/", (req, res) => {
  res.render("index");
});

app.get('/sign-up', (req, res) => {
   res.render("sign-up");
});

app.get('/log-in', (req, res) => {
    res.render("log-in");
});

app.get('/profile', (req, res)=> {
   res.render("profile");
});

app.get('/create', (req, res) => {
   res.render("create");
});

// Define a port and start listening for connections.
const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
