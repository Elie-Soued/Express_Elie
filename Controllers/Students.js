const studentsControllers = {
  logElie: (req, res) => res.send("Hello Elie"),
  logAria: (req, res) => res.send("Hello Aria"),
  logNoni: (req, res) => res.send("Hello Noni"),
  logHello: (req, res, next) => {
    console.log("Hello");
    next();
  },
};

module.exports = studentsControllers;
