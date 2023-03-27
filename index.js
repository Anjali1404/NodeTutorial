const express = require('express');
const port = 3000;
const app = express();

app.get("/", (req, res, next) => {
   res.json({
      "name": "Anjali"
   })
})

app.listen(port, () => {
   console.log(`Server running ${port}`);
})
