var express = require("express");
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var factory_controller = require("../controllers/factory");

// a simple test url to check that all of our files are communicating correctly.
router.get("/test", factory_controller.test);

router.post("/create", factory_controller.factory_create);

router.get("/:id", factory_controller.factory_details);

router.put("/:id/update", factory_controller.factory_update);

router.delete("/:id/delete", factory_controller.factory_delete);

module.exports = router;
