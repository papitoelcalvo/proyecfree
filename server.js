var express = require("express");
var app = express();
var cors = require("cors");

app.use(cors({ optionsSuccessStatus: 200 }));

app.get('/', (req, res) => {
  res.send('Timestamp Microservice is running');
});

// Ruta principal: /api/:date?
app.get('/api/:date', (req, res) => {
  let dateInput = req.params.date;

  let date;

  if (!dateInput) {
    // Sin parámetro -> usar fecha actual
    date = new Date();
  } else {
    // Revisar si es un timestamp (solo dígitos)
    if (!isNaN(dateInput)) {
      date = new Date(parseInt(dateInput));
    } else {
      date = new Date(dateInput);
    }
  }

  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  return res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

var listener = app.listen(process.env.PORT || 3000, () => {
  console.log("esta corriendo en el puerto:") + listener.address().port;
});
