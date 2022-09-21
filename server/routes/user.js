const express = require("express");
const { Register, Read, Remove } = require("../controllers/user");

const router = express.Router();

router.get("/read", Read);
router.post("/create", Register);
// router.put('/update',Update)
router.delete("/delete/:_id", Remove);

module.exports = router;
