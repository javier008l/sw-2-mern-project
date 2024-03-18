const user_controller = require('../controllers/user_controller');
var express=require("express");

const router = express.Router();

// http://localhost:3000/api/v1/users/new-user
router.post("/new-user", user_controller.createUser);
router.get("/", user_controller.listUsers);
router.get("/:id", user_controller.getUser);
router.patch("/edit/:id", user_controller.editUser);
router.delete("/delete/:id", user_controller.deleteUser);



module.exports = router; 