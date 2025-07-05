var express = require("express");
var app = express();
var cors = require("cors");

app.use(cors({ optionsSuccessStatus: 200 }));

/*app.get("/", (req, res) => {
  res.send("Timestamp Microservice is running");
});

// ✅ Ruta sin parámetro: devuelve hora actual
app.get("/api", (req, res) => {
  const date = new Date();
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

// ✅ Ruta con parámetro
app.get("/api/:date", (req, res) => {
  const dateInput = req.params.date;
  let date;

  // Si es un número (timestamp), conviértelo a int y pásalo al constructor
  if (!isNaN(dateInput) && /^\d+$/.test(dateInput)) {
    date = new Date(parseInt(dateInput));
  } else {
    date = new Date(dateInput);
  }

  // Verifica si es una fecha válida
  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});*/

app.get("/", (req, res) => {
  res.send("Header parser microservice");
});

app.get("/api/whoami", (req, res) => {
  res.json({
    ipadress: req.ip,
    lenguage: req.headers["accept-language"],
    software:
      req.headers[
        "user-agent"
      ],
  });
});

var listener = app.listen(process.env.PORT || 3000, () => {
  console.log("esta corriendo en el puerto:") + listener.address().port;
});
