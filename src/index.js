const express = require("express");
const bodyParse = require("body-parser");

const { PORT } =  require("./config/serverConfig.js");
const ApiRoutes = require("./routes/index.js");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParse.json());
  app.use(bodyParse.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`Server is started at PORT: ${PORT}`);
  });
};

setupAndStartServer();
