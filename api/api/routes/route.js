module.exports = function (app) {
  var eventList = require("../controllers/controller");
  app.route("/event").get(eventList.all_events);
};
