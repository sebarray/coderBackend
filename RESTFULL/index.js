const express = require("express");
const apiRouters = require("./app");

const app = express();
const PORT = process.env.PORT || 8080;

//Middlewares a nivel de aplicación
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouters);



const connectedServer = app.listen(PORT, () => {
  console.log(`🚀Server active and listening on the port: ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.log(`error:`, error.message);
});