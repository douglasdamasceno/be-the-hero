const router = require("express").Router();
const ongController = require("./controllers/OngController");
const incidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

router.post("/sessions", SessionController.create);

router.get("/ongs", ongController.index);
router.post("/ongs", ongController.create);

router.get("/profile", ProfileController.index);

router.post("/incidents", incidentController.create);
router.get("/incidents", incidentController.index);
router.delete("/incidents/:id", incidentController.delete);

module.exports = router;
