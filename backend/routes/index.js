import express from "express";
import { GetUsers, GetSingleUsers, Register, Login, Logout, UpdateUserInfo } from "../controllers/Users.js";
import { VerifyToken } from "../middleware/VerifyToken.js";
import { RefreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', VerifyToken, GetUsers);
router.get('/users/:id', GetSingleUsers);
router.patch('/users/:id', UpdateUserInfo);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', RefreshToken);
router.delete('/logout', Logout);

export default router;