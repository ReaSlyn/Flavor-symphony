const express = require("express");
const PORT = process.env.PORT || 5100;
const app = express();

app.listen(PORT, () => {
    console.log(`  App running in port ${PORT}`);
});