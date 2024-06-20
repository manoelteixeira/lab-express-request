const app = require("./app");

// Import environment variables
require("dotenv").config();

// Server Port
const PORT = process.env.SERVER_PORT;

// Listener
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}\nhttp://localhost:${PORT}`);
});
