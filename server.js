const express = require("express");
const app = express();
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const userRouter = require("./routes/user");
const blogRouter = require("./routes/blog");
app.use(express.json(), cors());
// Define Swagger options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "67130052 ชาคร แป้นสุข",
      version: "1.0.0",
      description: "Workshop 6 we564",
    },
  },
  apis: ["./routes/*.js"],
};

// Initialize Swagger-jsdoc
const specs = swaggerJsdoc(options);

// Middleware to serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Mount the router
app.use("/", userRouter);
app.use("/", blogRouter);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  app.get('/', (req, res) => {
    res.send("https://workshoprender67130052.onrender.com");
  });

});
