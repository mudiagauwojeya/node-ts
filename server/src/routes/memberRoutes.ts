import express from "express";
import {
	getMembersController,
	postMembersController,
} from "../Controllers/memberController";
import { isAuthenticated } from "../middlewares/session";

const router = express.Router();

router.get("/", isAuthenticated, getMembersController);
router.post("/", isAuthenticated, postMembersController);

export { router as Member };
